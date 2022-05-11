import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import BlogData from "./BlogData";
import TopPosts from "./Home Components/TopPost";
import axios from "axios";

const CategorizedBlogs = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  let categories = ["Bollywood", "Technology", "Hollywood", "Fitness", "Food"];
  let { category } = useParams();

    useEffect(
      () => {
          document.title = "The Siren";
          axios.get(`https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/${category}`)
              .then(
                  res => setData(res.data)
              );
      }, [ category]
  );

  useEffect(() => {
    const found = categories.find((element) => element === category);
    if (found === undefined) {
      navigate("/pagenotfound");
    }
  });

  const blogs = data.filter(
    (blog) => blog.category === category.toString())
  

  return (
    <div className="categorized-blogs">
      <div className="flex latest-bollywood-container">
        <div className="latest-bollywood-larea">
          <h2 className="categorized-blogs-h2">{category}</h2>
          <div className="hr categorized-blogs-hr" />
          <div className="blogs-container">
            <div className="blogs">
              {blogs.map((item, index) => (
                <div key={index}>
                  {index > 0 ? <hr /> : <></>}
                  <div
                    className="latest-bollywood-card flex"
                    onClick={() => navigate(`/article/${item.id}/${item.category}`)}>
                    <img src={item.image} alt="movie-poster"></img>
                    <div className="latest-bollywood-card-info">
                      <h4>{item.title.slice(0, 60)}</h4>
                      <p className="">{item.text.slice(0, 100)}</p>
                      <span className="category-date">
                        {item.category}
                        <span>/ {item.date}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-bollywood-rarea ">
          <TopPosts />
          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorizedBlogs;