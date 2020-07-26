import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./order_success.css";

function OrderSuccess() {
  const [product, setProduct] = useState({});

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setProduct(location.state);
  }, []);

  const handleBackClick = () => {
    history.push("/home");
  };

  return (
    <div className="order-success-container">
      <div className="alert">
        <h2 className="alert-title">Thanks for your trust.</h2>
        <p className="alert-desc">
          Your order will be arrived at home after 30 minutes from now.
        </p>
      </div>
      <div className="order-detail">
        <div className="order-line">
          <span>Product : </span>
          <span>{product.name}</span>
        </div>
        <div className="order-line">
          <span>Price : </span>
          <span>${product.price}</span>
        </div>
        <div className="order-line">
          <span>Amount : </span>
          <span>{product.amount}</span>
        </div>
        <div className="order-line bold">
          <span>Total Cost : </span>
          <span>${product.totalCost}</span>
        </div>
        <button className="back-button" onClick={handleBackClick}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default OrderSuccess;
