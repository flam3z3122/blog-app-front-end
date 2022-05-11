import React,{useState, useEffect} from "react";
import Featured from "./Featured";
import Latest from "./Latest"
import LatestArticle from "./LatestArticles"
import LatestStories from "./LatestStories"
import axios from "axios";


const Home = () => {

    const [data, setData] = useState([]);

    useEffect(
        () => {
            document.title = "The Siren";
            axios.get("https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/")
                .then(
                    res => setData(res.data)
                );
        }, []
    );
    return (
        <div className="home">
            <Featured data={data}/>
            <Latest  data={data}/>
            <LatestArticle  data={data}/>
            <LatestStories  data={data}/>
        </div>
    )
}

export default Home