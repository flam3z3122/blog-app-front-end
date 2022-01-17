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