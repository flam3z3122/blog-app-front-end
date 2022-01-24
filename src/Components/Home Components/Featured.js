import React from "react";
import BlogData from "../BlogData";
import { useNavigate } from "react-router-dom";
import "./Home.css"

const Featured = () => {

  const navigate = useNavigate();
  const Anime = BlogData.filter((blog) => blog.category === "Anime");
  return (
    <div className="feature flex" id="feature">
      <div
        className="feature-left"
        style={{
          backgroundImage: `url(${Anime[0].image})`,
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
          backgroundPosition:"center",
          // filter: "brightness(90%)",
        }}
        onClick={() => navigate(`/${Anime[0].category}/${Anime[0].id}`)}
      >
        <p className="feature-title" >{Anime[0].title}</p>
        <p>
        <span className="date1">
          {Anime[0].category}/ {Anime[0].date}
        </span>
        </p>
      </div>
      <div className="feature-right flex">
        {Anime
          .filter((item, index) => index > 0)
          .map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover",    
                backgroundPosition:"center",

              }}
              onClick={() => navigate(`/${item.category}/${item.id}`)}
            >
              <p className="feature-title">{item.title}</p>
              <p>
              <span className="date1">
                {item.category}/ {item.date}

              </span>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Featured;