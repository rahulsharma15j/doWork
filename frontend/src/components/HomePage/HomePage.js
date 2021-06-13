import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-left-logo">DoWork</h1>
        <ul className="navbar-left-list">
          <li className="navbar-left-list__item">Find Talent</li>
          <li className="navbar-left-list__item">Find Work</li>
          <li className="navbar-left-list__item">Why DoWork</li>
          <li className="navbar-left-list__item">Enterprise</li>
        </ul>
      </div>
      <div className="navbar-right">
        <input
          className="navbar-right__search"
          type="search"
          name="search"
          id="search"
        />
        <button className="navbar-right__btn">LogIn</button>
        <button className="navbar-right__btn">SignUp</button>
      </div>
    </div>
  );
};

export default HomePage;
