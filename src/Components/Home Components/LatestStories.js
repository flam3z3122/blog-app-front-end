import React from "react";
import { useNavigate } from "react-router-dom";
// import BlogData from "../BlogData";

const LatestStories = ({data}) => {
  let navigate = useNavigate();
  const hollywoodBlogs = data.filter((blog) => blog.category === "Hollywood");
  const latest = hollywoodBlogs.filter(
    (blog, index) =>
      index < hollywoodBlogs.length && index > hollywoodBlogs.length - 4
  );

  return (
    <div className="latest-hollywood">
      <h2> Latest Stories</h2>
      <div className="hr" />
      <hr />
      <div className="latest-blogs-cards flex">
        {latest.map((item, index) => (
          <div
            className="latest-hollywood-card"
            key={item.id}
            onClick={() => navigate(`/article/${item.id}/${item.category}`)}
          >
            <div className="info">
              <h3>{item.title.slice(0, 60)}</h3>
              <p className="para">{item.text.slice(0, 350)}</p>
              <span className="date">
                <strong>{item.category}</strong>
                <span>/ {item.date}</span>
              </span>
            </div>
            {index > 0 ? <hr className="vertical-hr" /> : <></>}
          </div>
        ))}
      </div>
      <hr />
      <div className="flex load-more" onClick={() => navigate("/Hollywood")}>
      <span alt="down-arrow" className='img' />
      <p>VIEW MORE</p>
      </div>
    </div>
  );
};

export default LatestStories;