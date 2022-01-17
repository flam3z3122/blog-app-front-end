import './LatestArticle.css';
import React, { useState } from "react";
import BlogData from "../BlogData";
import { Link } from "react-router-dom";
import TopPosts from "./TopPost";
import { useNavigate } from 'react-router-dom';



function CreateLatestArticles(item,index) {
    return <div key={item.id} className="articles-thumbnail">
         
          <img src={item.image} alt="img"/>
        
        <div className="article-heading-home-flex">
      
        {index > 0 ? <hr /> : <></>}
        
             <div className="info">

               <Link to={`/${item.category}/${item.id}`}> 


              <h3>{item.title.slice(0, 20)}</h3>
              <p className="para">{item.text.slice(0, 100)}</p>
              <p className="date">
                <strong>{item.category}</strong>
                <span> / {item.date}</span>
              </p>
            </Link>
            </div>
             
        </div>
       
    </div>
}


function LatestArticles() {

    let navigate = useNavigate();

    const [postNumber, setpostNumber] = useState(6);
    return (
        <div className="LatestArticles-Container">
            <h2> Latest Articles </h2>
            <div className="hr" />
            <div className="LatestArticles">
                <div className="articles-left-home">
                    {BlogData.slice(3, postNumber).map(CreateLatestArticles)}
                    <div
                        className="flex load-more"
                        onClick={() => navigate("/Bollywood")}
                        >
                        <span alt="down-arrow" className='img' />
                        <p>LOAD MORE</p>
                    </div>
                    
                    {/* <div onClick={() => setpostNumber(postNumber + 2)} className="load-more">
                        <i className="fas fa-arrow-down"></i> Load More

                    </div> */}



                    <div id="carouselExampleCaptions" className="carousel slide margtb2rem" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="low-brigtness radnom5gh415f" src={BlogData[0].image} className="d-block w-100" alt="covered" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${BlogData[0].category}/${BlogData[0].id}`}> <h5>{BlogData[0].title}</h5></Link>
                                    <p>{BlogData[0].category} {BlogData[0].time}</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img className="low-brigtness radnom54fgh15f" src={BlogData[1].image} className="d-block w-100" alt="secfa" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${BlogData[1].category}/${BlogData[1].id}`}> <h5>{BlogData[1].title}</h5></Link>
                                    <p>{BlogData[1].category} {BlogData[1].time}</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img className="low-brigtness radnom541nhjk5f" src={BlogData[2].image} className="d-block w-100" alt="sas" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${BlogData[2].category}/${BlogData[2].id}`}> <h5>{BlogData[2].title}</h5></Link>
                                    <p>{BlogData[2].category} {BlogData[2].time}</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                <div className="latest-bollywood-rarea ">
                  <div className="advertisement">
                    <p>Advertisement</p>
                  </div>
                  <TopPosts />
                </div>


            </div >
        </div >
    );
}

export default LatestArticles;