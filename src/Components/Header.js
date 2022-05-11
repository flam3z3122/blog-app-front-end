import React,{useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"
import axios from "axios";


const Header = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(
    () => {
        axios.get("https://react-blog-backend-full.herokuapp.com/api/v1/sirenBlog/")
            .then(
                res => setData(res.data)
            );
    }, [data  ]
);

  return (
    <div id="header" className="head">
      <div className="icon flex" onClick={() => navigate("/")}>
        <span className="the">The</span>
        <span className="siren">Siren</span>
      </div>
      <div className="menu">
        <label htmlFor="check">
          <i className="fas fa-bars"></i>
        </label>
      </div>
      <div className="nav">
        <input type="checkbox" id="check" />
        <div className="nav-bar flex">
          <Link to="/">Home</Link>
          {/* {data.filter(
            category => (category.id) % 7 === 0
            ).map(
              (item , index)=>(
                <Link key={index} to={`/${item.category}`} className="head-link">{item.category}</Link>
              )
            )} */}
          <Link to="/Bollywood">Bollywood</Link>
          <Link to="/Technology">Technology</Link>
          <Link to="/Hollywood">Hollywood</Link>
          <Link to="/Fitness">Fitness</Link>
          <Link to="/Food">Food</Link>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;

