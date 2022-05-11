import React, { useEffect , useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Blog = () => {

    const [data, setData] = useState([]);
    let navigate = useNavigate();
    let { categories, ID } = useParams();

  
  useEffect(
    () => {
        document.title = categories;
        let isMounted = true;
        axios.get(`https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/article/${ID}/${categories}`)
        .then(
            res => {
                if (isMounted) {
                    setData(res.data)
                    console.log("data is here"+ data);
                }
            }
        )
        return () => {
            isMounted = false;
        }
    }, [ ID, categories]
);

console.log(data);

const tempBlogs = data.filter((blog) => blog.category === "Bollywood");
const blogs = tempBlogs.filter(
    (blog, index) => index < tempBlogs.length && index > tempBlogs.length - 9 
  )

  let item = data.filter((item) => item.id === parseInt(ID)) 
  let moreArticles = data.filter(
    (item, index) => item.category === categories && item.id !== parseInt(ID)
  ).filter((item, index) => index < 3);

//   useEffect(() => {
//     const found = data.find((element) => element.id === parseInt(ID));
//     if (found === undefined) {
//       navigate("/pagenotfound");
//     }
//   });

  return (
    <div className="blog-main">
{/* 
        {data.map(
            (item)=>
            <h2> this is {item.title}</h2>
            )}  */}

            <div className="blog-container" >
            <h2>{blogs.title}</h2>
            <div className="clap-share">
              <div className="flex">
                <span src="/images/rythm.jpg" alt="claps"className="rythm" />
                <p>{blogs.claps}</p>
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
                  <p>{blogs.author}</p>
                  <span>
                    {blogs.date} · {blogs.read}
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
              <img src={blogs.image} alt="id" />
              <p>{blogs.text}</p>
              <div className="tags">
                {blogs.tags !== undefined ? (
                  blogs.tags.map((tag) => (
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
    
                <p>{blogs.claps}&nbsp;claps</p>
              </div>
              <div className="author flex">
              <span src="/images/profilepicture.png" alt="down-arrow" className="profilepic" />
    
                <div className="blog-info">
                  <span>WRITTEN BY</span>
                  <p>{blogs.author}</p>
                  <span>
                    {blogs.date} · {blogs.read}
                  </span>
                </div>
              </div>
            </div>
          </div>
    
        {/* )} */}







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

export default Blog;