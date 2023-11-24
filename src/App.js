import { Header } from "./Components/Header";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductDetails } from "./Components/ProductDetail";
import { ProductListing } from "./Components/ProductListing";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
        <Outlet />
      </Router>
    </>
  );
}

export default App;
