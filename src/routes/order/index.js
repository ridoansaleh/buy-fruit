import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./order.css";

function Order(props) {
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setProduct(location.state);
  }, []);

  const handleBuyClick = () => {
    if (amount > 0) {
      history.push({
        pathname: "/order-success",
        state: {
          ...product,
          amount,
          totalCost: amount * product.price,
        },
      });
    }
  };

  return (
    <div className="order-container">
      <h1>Order</h1>
      <div className="product-wrapper">
        <img src={product.img} className="product-image" />
        <span className="product-name">{product.name}</span>
        <span className="price">${product.price * amount}</span>
        <input
          type="number"
          name="amount"
          value={amount}
          placeholder="Amount"
          className="amount-field"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleBuyClick}>Buy Now</button>
      </div>
    </div>
  );
}

export default Order;
