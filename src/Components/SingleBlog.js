import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogData from "./BlogData";


const SingleBlog = () => {
  let navigate = useNavigate();
  let { category, blogId } = useParams();
  let blog = BlogData.filter((item) => item.id === parseInt(blogId));
  let moreArticles = BlogData.filter(
    (item, index) => item.category === category && item.id !== parseInt(blogId)
  ).filter((item, index) => index < 3);
  useEffect(() => {
    const found = BlogData.find((element) => element.id === parseInt(blogId));
    if (found === undefined) {
      navigate("/pagenotfound");
    }
  });

  return (
    <div className="blog-main">
      <div className="blog-container">
        <h2>{blog[0].title}</h2>
        <div className="clap-share">
          <div className="flex">
            <span src="/images/rythm.jpg" alt="claps"className="rythm" />
            <p>{blog[0].claps}</p>
          </div>
          <div className="flex">
            <span src="/images/share.svg" alt="share"  className="share"/>
            <p>Share this article</p>
          </div>
        </div>
        <div className="blog-header flex">
          <div className="flex">
            <span src="/images/profilepicture.png" alt="down-arrow" className="profilepic" />
            <div className="blog-info">
              <p>{blog[0].author}</p>
              <span>
                {blog[0].date} · {blog[0].read}
              </span>
            </div>
          </div>
          <div className="social">
            <i className="fa-brands fa-facebook-square"></i>
            <i className="fa-brands fa-twitter-square"></i>
            <i className="fa-brands fa-instagram-square"></i>
            <i className="fa-brands fa-youtube-square"></i>
          </div>
        </div>
        <div className="blog-content">
          <img src={blog[0].image} alt="hiS" />
          <p>{blog[0].text}</p>
          <div className="tags">
            {blog[0].tags !== undefined ? (
              blog[0].tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="claps flex">
          <span src="/images/rythm.jpg" alt="claps"className="rythm" />

            <p>{blog[0].claps}&nbsp;claps</p>
          </div>
          <div className="author flex">
          <span src="/images/profilepicture.png" alt="down-arrow" className="profilepic" />

            <div className="blog-info">
              <span>WRITTEN BY</span>
              <p>{blog[0].author}</p>
              <span>
                {blog[0].date} · {blog[0].read}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="more-articles-section ">
        <div className="more-articles">
          <h2>More From The Siren</h2>
          <hr />
          <div className="flex more-articles-cards">
            {moreArticles.map((item) => (
              <div
                className="more-articles-card"
                onClick={() => navigate(`/${item.category}/${item.id}`)}
                key={item.id}
              >
                <p className="related-reads">Related reads</p>
                <img src={item.image} alt={item.title} />
                <p className="title">{item.title}</p>
                <div className="author flex">
                <span src="/images/profilepicture.png" alt="down-arrow" className="profilepic" />

                  <div className="blog-info">
                    <p className="title-mobile">{item.title}</p>
                    <p className="author-name">{item.author}</p>
                    <span>
                      {item.date} · {item.read}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// // import MoreSiren from './MoreSiren';
// import axios from 'axios';

// const Article = () => {

//     const [data, setData] = useState([]);
//     const { ID } = useParams()
//     const { categories } = useParams()

//   //   useEffect(()=>{
//   //     axios.get(`https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/article/${ID}/${categories}`).then(
//   //         res => setData(res.data)
//   //     )
//   // },[categories])

//     useEffect(
//         () => {
//             document.title = categories;
//             let isMounted = true;
//             axios.get(`https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/article/${ID}/${categories}`)
//             .then(
//                 res => {
//                     if (isMounted) {
//                         setData(res.data)
//                     }
//                 }
//             )
//             return () => {
//                 isMounted = false;
//             }
//         }, [data, ID, categories]
//     );

//     // const article = data.filter(blog => blog.id === parseInt(ID) && blog.category === categories)
  
//     return (
//       // <div>
//       //   fak;sdklas euuuuuudasd
//       //       {data.filter((value) => (value.id === parseInt(ID) && value.category === categories )).map((val,index) => (
//       //           <div className='articleContainer' key={index}>
//       //               <p className='articleTitle'>{val.title}</p>
//       //               <div className='articleProfileBox'>
//       //                   <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
//       //                   <div>
//       //                       <p><b>{val.author}</b></p>
//       //                       <p>{val.date}</p>
//       //                   </div>
//       //               </div>
//       //               <img src={val.image} alt='' className='articleImg' />
//       //               <p>{val.text}</p>
//       //               <p> <b>9.3k Like</b></p>
//       //               <hr />

//       //               <div className='articleProfileBox'>
//       //                   <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20574488.jpg' alt='' className='articleProfileImg' />
//       //                   <div>
//       //                       <p>Written By</p>
//       //                       <p><b>{val.Author}</b></p>
//       //                       <p>{val.Date}</p>
//       //                   </div>
//       //               </div>
//       //               <hr />
//       //           </div>
//       //       ))}

//       //   {/* <MoreFromSiren rows={rows} /> */}
//       //   </div>

//         <>
//             <div className="main-article-container">
//                 hellos
//                 {
                  
//                     data.filter(
//                         (article) => article.id === parseInt(ID) && article.category === categories
//                     )
//                     .map(
//                         (content, index) => <div key={index}>
//                             <h3 className="article-title">{content.title} </h3>
//                             <img className="article-image" src={content.image} alt="" />
//                             <p className="article-body" >{content.text}</p>
//                             <p className="article-context" >Let's talk about them...</p>
//                             <p className="article-description" >This is about {content.title} which is popular on the social media platform and much to say is that {content.text}</p>
//                             <div className="article-category-clap">
//                                 <span className="article-category" >{content.category}</span>
//                                 <span src="/images/rythm.jpg" alt="claps"className="rythm" />
//                                 <p>{content.claps}</p>
//                             </div>
//                             <hr className="article-horizontal-line" />
//                             <div className="article-user" >
//                             <span src="/images/profilepicture.png" alt="down-arrow" className="profilepic" />
//                                 <div className="article-user-division">
//                                     <p className="article-user-written">written by <br/> </p>
//                                     <p>{content.author}</p>
//                                     <p className="article-user-date">January 31, 2022</p>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//             {/* <MoreSiren /> */}
//         </>
//     )
// }
// export default Article;