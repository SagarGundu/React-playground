import { LOGO_URL } from "./Utils/constants";
import { useState } from "react";
import { Link } from "react-router";
const Header =() =>{

  const [btnNameReact, setBtnNameReact] = useState("login");
    return(
      <div className="header">
        <div className="logo-container">
        <img 
        className="logo"
        src={ LOGO_URL }
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About Us</Link></li>
          <li><Link to ="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button 
          className="login"
          onClick={()=>{
            btnNameReact === "login"
            ? setBtnNameReact ("logout")
            : setBtnNameReact ("login");
          }}
          >
            {btnNameReact}
            </button>
        </ul>
      </div>
      </div>
    );
  };

  export default Header;