import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
 
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
    const [click, setclick] = useState(false)
  return (
    <div>
      <Head />
      <header>
        <nav className="flexSB">
          {/* <ul className="flexSB"> */}
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setclick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All COurses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/review">Review</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => setclick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
