import React from "react";
import { Link } from "react-router-dom";
// import BlogData from "../BlogData";
import "./Home.css"

const Featured = ({ data }) => {



  console.log(data);

  const Anime = data.filter((blog) => blog.category === "Anime");
  // const Ani = BlogData.filter((blog) => blog.category === "Anime");

  return (

    <div className='feature flex'>
      <div className='feature-left'>
        {data.filter((value) => value.id === "1" && value.category === "Anime").map((val, index) => (

          <Link to={`/article/${val.id}/${val.category}`} key={index}>
            <img src={val.image} alt='blogs' className='feature-left' style={{
              width: "100%",
              height: "100%"
            }} />
            <p className='feature-title'>{val.title}</p>
            <p className='date1'>{val.category} / {val.date}</p>

          </Link>
        ))}
      </div>

      <div className='feature-right flex'>
        {Anime.filter((value, index) => index > 0).map((val, index) => (

          <div key={index}>
            <Link to={`/${val.category}/${val.id}`}>
              <img src={val.image} alt='blogs' className='feature-right'
                style={{
                  width: "100%",
                  height: "100%"
                }} />
              <p className='feature-title'>{val.title}</p>
              <p className='date1'>{val.category} / {val.date}</p>
            </Link>
          </div>
        ))}
      </div>


    </div>
   
  );
};

export default Featured;