import React from "react";
import { useNavigate } from "react-router-dom";



const TopPosts = ({data}) => {
  const navigate = useNavigate();
  const sorted = data.map((a) => {
    return { ...a };
  });
  sorted.sort(function (a, b) {
    return b.claps - a.claps;
  });
  return (
    <div className="top-posts">
      <h2>Top Posts</h2>
      <div className="hr" />
      {sorted.map((item , index)=>
      index === 0 &&(
        <div key={index}>      
      <div
        className="top-posts-card first-top-post "
        onClick={() => navigate(`/article/${item.id}/${item.category}`)}
      >
        <img src={item.image} alt="poster"></img>
        <div className="flex">
          <div className="top-posts-card-info ">
            <h3>{item.title.slice(0, 62)}</h3>
            <span className="category-date">
              {item.category}
              <span>/ {item.date}</span>
            </span>
          </div>
          <div className="post-number">1</div>
        </div>
      </div>

      </div>
      
      ))}

      {sorted.map(
        (item, index) =>
          index > 0 &&
          index < 4 && (
            <div key={index}>
              <hr />
              <div
                className="top-posts-card flex"
                onClick={() => navigate(`/article/${item.id}/${item.category}`)}
              >
                <img src={item.image} alt="movie-poster"></img>
                <div className="top-posts-card-info">
                  <h3>{item.title.slice(0, 15)}</h3>
                  <span className="category-date">
                    {item.category}
                    <span>/ {item.date}</span>
                  </span>
                </div>
                <div className="post-number">{index + 1}</div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TopPosts;