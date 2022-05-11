import React from "react";
import { useNavigate } from "react-router-dom";
// import BlogData from "../BlogData";
import TopPosts from "./TopPost";
import "./Home.css"
import { Link } from "react-router-dom";

const LatestArticle = ({data}) => {

  const navigate = useNavigate();

  const tempBlogs = data.filter((blog) => blog.category === "Bollywood");
  const blogs = tempBlogs.filter(
      (blog, index) => index < tempBlogs.length && index > tempBlogs.length - 9 
    )
  
    const techLatestBlog = data.filter(
                (blog) => blog.category === "Technology").splice(-1);


  return (
    <div>
      <h2>Latest Articles</h2>
      <div className="hr" />
      <div className="latest-bollywood-container ">
        <div className="latest-bollywood-larea">

        <div className="blog-body ">
            <div>
              {blogs.map((item, index)=>
              index > -1 &&
              index < 4 && (
                <div key={index}>
                  <Link to={`/article/${item.id}/${item.category}`} style={{ textDecoration: "none"}} >
                    <div className="blog-container">
                      <img  src={item.image} alt="blogs" className="blogimg"/>
                      <div className="blog-content">
                        <p className="blog-title">{item.title}</p>
                        <p className="blog-text">{item.text}</p>
                        <p className="blog-category"><span>{item.category}</span> / {item.date}</p>
                      </div>
                    </div>
                  </Link>
                  <hr className="blog-line"/>
                </div>
              ))}
            </div>
          </div>
               <div
            className="flex load-more"
            onClick={() => navigate("/Bollywood")}
          >
           <span alt="down-arrow" className='img' />
            <span>LOAD MORE</span>

          </div> 

            {techLatestBlog.map((item, index)=>(
              <div
              key={index}
              className="vertical-gallery"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                WebkitBackgroundSize: "cover",
                width:"80%"
              }}
              onClick={() =>
                navigate(`/article/${item.id}/${item.category}`)
              }
            >
              {/* <img src={item.image}/> */}
              <h2>{item.title}</h2>
              <p>
                {item.category}/ {techLatestBlog[0].date}
              </p>
            </div>

            ))}


            </div>

              <div className="latest-bollywood-rarea ">
                <div className="advertisement">
                  <p>Advertisement</p>
                </div>
                <TopPosts data={data}/>
              </div>


              </div>
          </div>

        

        
          );
        };
        
        export default LatestArticle;

          /* 

        <div className="latest-bollywood-rarea ">
          <div className="advertisement">
            <p>Advertisement</p>
          </div>
          <TopPosts />
        </div>
      </div>
    </div> */


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

