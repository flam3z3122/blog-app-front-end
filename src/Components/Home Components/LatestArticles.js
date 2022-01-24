import React from "react";
import { useNavigate } from "react-router-dom";
import BlogData from "../BlogData";
import TopPosts from "./TopPost";
import "./Home.css"

const LatestArticle = () => {
  let navigate = useNavigate();
  const tempBlogs = BlogData.filter((blog) => blog.category === "Bollywood");
  const blogs = tempBlogs
    .filter(
      (blog, index) => index < tempBlogs.length && index > tempBlogs.length - 9
    )
  
    const techLatestBlog = BlogData.filter(
                (blog) => blog.category === "Technology").splice(-1);
  return (
    <div>
      <h2>Latest Articles</h2>
      <div className="hr" />
      <div className="latest-bollywood-container flex">
        <div className="latest-bollywood-larea">
          <hr />
          <div
            className="latest-bollywood-card first-bollywood-card flex"
            onClick={() => navigate(`/${blogs[0].category}/${blogs[0].id}`)}
          >
            <img src={blogs[0].image} alt="movie-poster"></img>
            <div className="latest-bollywood-card-info">
              <h3>{blogs[0].title.slice(0, 62)}</h3>
              <p className="">{blogs[0].text.slice(0, 100)}</p>
              <span className="category-date">
                {blogs[0].category}
                <span>/ {blogs[0].date}</span>
              </span>
            </div>
          </div>
          {blogs.map(
            (item, index) =>
              index > 0 &&
              index < 4 && (
                <div key={item.id}>
                  <hr />
                  <div
                    className="latest-bollywood-card flex"
                    onClick={() => navigate(`/${item.category}/${item.id}`)}
                  >
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
              )
          )}
          <div
            className="flex load-more"
            onClick={() => navigate("/Bollywood")}
          >
           <span alt="down-arrow" className='img' />
            <span>LOAD MORE</span>

          </div>


          
          <div
            className="vertical-gallery"
            style={{
              backgroundImage: `url(${techLatestBlog[0].image})`,
              backgroundRepeat: "no-repeat",
              WebkitBackgroundSize: "cover",
            }}
            onClick={() =>
              navigate(`/${techLatestBlog[0].category}/${techLatestBlog[0].id}`)
            }
          >
            <h2>{techLatestBlog[0].title}</h2>
            <p>
              {techLatestBlog[0].category}/ {techLatestBlog[0].date}
            </p>
          </div>
        </div>
        <div className="latest-bollywood-rarea ">
          <div className="advertisement">
            <p>Advertisement</p>
          </div>
          <TopPosts />
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;

// import './LatestArticle.css';
// import React, { useState } from "react";
// import BlogData from "../BlogData";
// import { Link } from "react-router-dom";
// import TopPosts from "./TopPost";
// import { useNavigate } from 'react-router-dom';



// function CreateLatestArticles(item,index) {
//     return <div key={item.id} className="articles-thumbnail">
         
//           <img src={item.image} alt="img"/>
        
//         <div className="article-heading-home-flex">
      
//         {index > 0 ? <hr /> : <></>}
        
//              <div className="info">

//                <Link to={`/${item.category}/${item.id}`}> 


//               <h3>{item.title.slice(0, 20)}</h3>
//               <p className="para">{item.text.slice(0, 100)}</p>
//               <p className="date">
//                 <strong>{item.category}</strong>
//                 <span> / {item.date}</span>
//               </p>
//             </Link>
//             </div>
             
//         </div>
       
//     </div>
// }


// function LatestArticles() {

//     let navigate = useNavigate();

//     const techBlog = BlogData.filter(
//         (blog) => blog.category === "Technology").splice(-1);

//     const [postNumber] = useState(6);
//     return (
//         <div className="LatestArticles-Container">
//             <h2> Latest Articles </h2>
//             <div className="hr" />
//             <div className="LatestArticles">
//                 <div className="articles-left-home">
//                     {BlogData.slice(3, postNumber).map(CreateLatestArticles)}
//                     <div
//                         className="flex load-more"
//                         onClick={() => navigate("/Bollywood")}
//                         >
//                         <span alt="down-arrow" className='img' />
//                         <p>LOAD MORE</p>
//                     </div>
                    
//                     {/* <div onClick={() => setpostNumber(postNumber + 2)} className="load-more">
//                         <i className="fas fa-arrow-down"></i> Load More

//                     </div> */}
  
//   <div
//             className="vertical-gallery"
//             style={{
//               backgroundImage: `url(${techBlog[0].image})`,
//               backgroundRepeat: "no-repeat",
//               WebkitBackgroundSize: "cover",
//               filter: "brightness(95%)",
//             }}
//             onClick={() =>
//               navigate(`/${techBlog[0].category}/${techBlog[0].id}`)
//             }
//           >
//             <h2 >{techBlog[0].title}</h2>
//             <p>
//               {techBlog[0].category}/ {techBlog[0].date}
//             </p>
//           </div>


//                     {/* <div id="carouselExampleCaptions" className="carousel slide margtb2rem" data-bs-ride="carousel">
//                         <div className="carousel-indicators">
//                             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//                             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                         </div>
//                         <div className="carousel-inner">
//                             <div className="carousel-item active">
//                                 <img className="low-brigtness " src={BlogData[0].image} className="d-block w-100" alt="covered" />
//                                 <div className="carousel-caption d-md-block">
//                                     <Link to={`/${BlogData[0].category}/${BlogData[0].id}`}> <h5>{BlogData[0].title}</h5></Link>
//                                     <p>{BlogData[0].category} {BlogData[0].time}</p>
//                                 </div>
//                             </div>
//                             <div className="carousel-item ">
//                                 <img className="low-brigtness " src={BlogData[1].image} className="d-block w-100" alt="secfa" />
//                                 <div className="carousel-caption d-md-block">
//                                     <Link to={`/${BlogData[1].category}/${BlogData[1].id}`}> <h5>{BlogData[1].title}</h5></Link>
//                                     <p>{BlogData[1].category} {BlogData[1].time}</p>
//                                 </div>
//                             </div>
//                             <div className="carousel-item ">
//                                 <img className="low-brigtness " src={BlogData[2].image} className="d-block w-100" alt="sas" />
//                                 <div className="carousel-caption d-md-block">
//                                     <Link to={`/${BlogData[2].category}/${BlogData[2].id}`}> <h5>{BlogData[2].title}</h5></Link>
//                                     <p>{BlogData[2].category} {BlogData[2].time}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Previous</span>
//                         </button>
//                         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span className="visually-hidden">Next</span>
//                         </button>
//                     </div> */}

//                 </div>

//                 <div className="latest-bollywood-rarea ">
//                   <div className="advertisement">
//                     <p>Advertisement</p>
//                   </div>
//                   <TopPosts />
//                 </div>


//             </div >
//         </div >
//     );
// }

// export default LatestArticles;