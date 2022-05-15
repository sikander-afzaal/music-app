import React from "react";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LandingHeader from "../../Layout/Landing-Header/Landing-Header";
function Landing() {
  return (
    <div className="landing">
      <LandingHeader />
      <div className="landing__hero">
        <div className="hero-container flex">
          <div className="hero-cont__top-cont flex">
            <h1>Listen to Songs</h1>
            <p>
              Discover, stream, and share a constantly expanding mix of music
              from emerging and major artists around the world.
            </p>
          </div>
          <div className="btn-div2 flex">
            <button className="sign-up flex">
              Signup Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <a href="#" className="explore">
              Explore
            </a>
          </div>
          <div className="landing__search-div flex">
            <input type="text" placeholder={"Search for artists, tracks"} />
            <button className="search flex">Search</button>
          </div>
        </div>
        <ul className="bubbles-ul">
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
          <li className="bubbles"></li>
        </ul>
      </div>
      <div className="feats"></div>
    </div>
  );
}

export default Landing;
