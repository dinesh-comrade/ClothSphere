import { ActionTypes } from "../Constants/ActionTypes";

function setProducts(products) {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
}

function selectedProduct(product) {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
}

function removeSelectedProduct() {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
}

export { setProducts, selectedProduct, removeSelectedProduct };
