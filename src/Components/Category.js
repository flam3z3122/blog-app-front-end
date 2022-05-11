import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import TopPosts from './Home Components/TopPost';

export default function Category() {    
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);
    const [randomNo, setRandomNo] = useState();

    const { categories } = useParams();

    useEffect(
        () => {
            document.title = categories;
            let isMounted = true; 
            axios.get(`https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/${categories}`)
            .then(
                res => {
                    if (isMounted) {
                        setData(res.data)
                    }
                }
            )
            return () => {
                isMounted = false;
            }
        }, [data, categories]
    );

    useEffect(
        () => {
            setRandomNo(Math.floor(Math.random() * ((5 - 1) + 1)) + 1);

            axios.get("https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/")
            .then(
                res => setPost(res.data)
            )
        }, [categories]
    );
    
    return (
        <>
            <div className="category-container">
                <div className="category-main">
                    <h1 className="category-heading">{categories}</h1>
                    {
                        data.filter(
                            display => display.category === categories
                        ).map(
                            (content, index) => <div key={index}>
                                <Link to={`/article/${content.id}/${content.category}`} style={{ textDecoration: "none" , color: "black" }} className="content-container">
                                    <img className="category-main-images" src={content.image} alt='' />
                                    <div className="content-division">
                                        <h4 className="content-main-title">{content.title}</h4>
                                        <p className="content-main-body">{content.text}</p>
                                        <p className="content-main-category"> {content.category}
                                            <span className="content-main-date"> / {content.date}</span>
                                        </p>
                                    </div>
                                </Link>
                                <hr className="category-horizontal-line"/>
                            </div>
                        )
                    }
                </div>

                    <TopPosts data={data}/>
            </div>
        </>
    )
}