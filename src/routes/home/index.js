import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import mangoPic from "./assets/mango.jpg";
import applePic from "./assets/apple.png";
import starPic from "./assets/star.jpg";

const fruits = [
  {
    img: mangoPic,
    imgLabel: "Mango Picture",
    name: "Mango",
    price: 10,
  },
  {
    img: applePic,
    imgLabel: "Apple Picture",
    name: "Apple",
    price: 13,
  },
  {
    img: starPic,
    imgLabel: "Star Fruit Picture",
    name: "Star Fruit",
    price: 6,
  },
];

function Home() {
  const history = useHistory();

  const handleProductClick = (data) => {
    history.push({
      pathname: "/order",
      state: data,
    });
  };

  return (
    <div className="product-container">
      <h1>List of Fruit</h1>
      {fruits.map((data, index) => (
        <div
          key={index}
          className="product-item"
          onClick={() => handleProductClick(data)}
        >
          <img src={data.img} alt={data.imgLabel} className="product-image" />
          <div className="product-details">
            <span className="product-name">{data.name}</span>
            <span className="product-price">${data.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
