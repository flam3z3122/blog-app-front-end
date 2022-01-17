import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"


const Header = () => {
  const navigate = useNavigate();
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

