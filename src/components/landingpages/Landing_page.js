import '../landingpages/Landing_page.css';
import main from '../landingpages/main.PNG'
import React from "react";
import { Link } from "react-router-dom";

function Landing_page() {
  return (
    <div className="landingpage">
      <div className="row">
        <div className="colum">
          <img src={main} alt="img" id="image" />
        </div>
        <div className="colum1">
          <h1 className="heading">10x Team 04</h1>
          <Link to="PostView"><button>Enter</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Landing_page;