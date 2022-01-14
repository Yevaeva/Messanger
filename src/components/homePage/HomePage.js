import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const HomePage = (props) => {
  return (
    <div className="background">
      <main>
        <img src={logo} alt="Logo" />
        <div className="btnWrapper">
          <Link to="/register" exact="true" className="register">
            <input type="submit" value="Register" />
          </Link>
          <Link to="/sign-in" exact="true" className="signin">
            <input type="submit" value="Sign in" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
