import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";
import error from "./error.png"

export default function NotFound() {
  const history = useHistory();
  return (
    <div className="not">
      <img className="img" src={error}></img>
      
      <h1 style={{textAlign : "center" ,  color:"black"}}>Oops! Page Not Found!</h1>
      <div className="text">
      <p style={{textAlign:"center" , padding:"1.5%" }}>
        We’re sorry but we can’t seem to find the page you requested. This <br></br> might
        be because you have typed the web address incorrectly.
      </p>
      <button  className="backButton"
        onClick={() => {
          history.push("/");
        }}
      >
        Back to home
      </button>
      </div>
    </div>
  );
}
