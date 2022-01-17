import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home Components/Home"
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import SingleBlog from "./Components/SingleBlog";
import ScrollUp from "./Components/ScrollUp";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollUp />
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
          <Route path="/:category" element={<Categories />} />
          <Route path="/:category/:blogId" element={<SingleBlog/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
