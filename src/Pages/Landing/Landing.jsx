import React from "react";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LandingHeader from "../../Layout/Landing-Header/Landing-Header";
import feature1 from "../../Assets/landing-page/feature1.svg";
import feature2 from "../../Assets/landing-page/feature2.svg";
import Trending from "../../Components/Trending-Artists/Trending";
function Landing() {
  return (
    <div className="landing">
      <LandingHeader />
      {/* hero section landing page --------------------- */}
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
      {/* end hero section landing page --------------------- */}

      {/* features section landing page --------------------- */}
      <div className="feats flex">
        <div className="feat-row flex">
          <img src={feature1} alt="" />
          <div className="text-feature flex">
            <h2 className="feature-h2">Listen Music Everywhere, Anytime</h2>
            <p className="feature-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="feat-row flex">
          <div className="text-feature flex">
            <h2 className="feature-h2">
              Create Playlists with any song, On-The-Go
            </h2>
            <p className="feature-p">
              Second Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
              2
            </p>
          </div>
          <img src={feature2} alt="" />
        </div>
      </div>
      {/* end features section landing page --------------------- */}
      <div className="trend-cont flex">
        <div className="trending flex">
          <h1>Top Trending Artists</h1>
          <div className="trending-row flex">
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
