import React from "react";
import { useNavigate } from "react-router-dom";
import BlogData from "../BlogData";
import "./Home.css"

const Latest = () => {
  let navigate = useNavigate();
  const latest = BlogData.filter(
    (blog, index) => index < BlogData.length && index > BlogData.length - 4).reverse();

  return (
    <div id="latest">
      <h2>Latest </h2>
      <div className="hr" />
      <div className="latest-cards flex">
        {latest.map((item) => (
          <div
            className="latest-card"
            key={item.id}
            onClick={() => navigate(`/${item.category}/${item.id}`)}>
            <img src={item.image} alt="random"></img>
            <div className="info">
              <h3>{item.title.slice(0, 20)}</h3>
              <p className="para">{item.text.slice(0, 100)}</p>
              <p className="date">
                <strong>{item.category}</strong>
                <span>/ {item.date}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;