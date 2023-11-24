/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/Actions/ProductActions";
import "./css/ProductDetails.css";

function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="container mt-5">
      {Object.keys(product).length === 0 ? (
        <div className="Loading">...Loading</div>
      ) : (
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid detail-img" src={image} alt={title} />
          </div>
          <div className="col-lg-6">
            <h1 className="detail-title">{title}</h1>
            <h2>
              <a href="#" className="btn btn-primary">
                ${price}
              </a>
            </h2>
            <h3 className="text-brown">{category}</h3>
            <p>{description}</p>
            <button className="btn btn-success add-to-cart">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export { ProductDetails };
