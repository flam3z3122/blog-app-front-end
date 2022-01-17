import React from "react";
import Featured from "./Featured";
import Latest from "./Latest"
import LatestArticle from "./LatestArticles"
import LatestStories from "./LatestStories"




const Home = () => {
    return(
        <div className="home">
        <Featured />
        <Latest />
        <LatestArticle />
        <LatestStories />
        </div>
    )
}

export default Home