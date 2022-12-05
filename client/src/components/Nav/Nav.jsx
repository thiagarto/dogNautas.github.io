import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
const Nav = () => {
  return (
    <div class="flex-container">
      <Link to="/home">
       
        <img src={logo} alt="imagen" className="logo" />
        
      </Link>

      <Link to="/" className="letters" />
      <Link
        to="/create-dog"
        className="letters"
        style={{ textDecoration: "none" }}
      >
       
        CreateDog{" "}
      </Link>
    </div>
  );
};
export default Nav;
