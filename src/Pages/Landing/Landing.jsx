import React from "react";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import LandingHeader from "../../Layout/Landing-Header/Landing-Header";
import feature1 from "../../Assets/landing-page/feature1.svg";
import feature2 from "../../Assets/landing-page/feature2.svg";
import Trending from "../../Components/Trending-Artists/Trending";
import LandFooter from "../../Layout/Landing-Footer/Landing-Footer";
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
      {/* trending section landing page --------------------- */}
      <div className="trend-cont flex">
        <div className="trending flex">
          <h1>Top Trending Artists</h1>
          <div className="trending-row flex">
            <Trending />
          </div>
        </div>
      </div>
      {/* end trending section landing page --------------------- */}
      {/* creators section landing page --------------------- */}
      <div className="creators-cont flex">
        <div className="creators flex">
          <div className="top-creator flex">
            <h1>Calling all creators</h1>
            <p>
              Get on newyauk to connect with fans, share your sounds, and grow
              your audience.
            </p>
          </div>

          <div className="create-row flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              datareactid="1231"
              className="create-svg"
            >
              <polyline points="16 16 12 12 8 16"></polyline>
              <line x1="12" y1="12" x2="12" y2="21"></line>
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
              <polyline points="16 16 12 12 8 16"></polyline>
            </svg>
            <h2>Upload Songs</h2>
          </div>
          <div className="create-row flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="create-svg"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            <h2>Check Stats</h2>
          </div>
        </div>
      </div>
      {/*end creators section landing page --------------------- */}
      {/* rock section landing page --------------------- */}
      <div className="rock-cont flex">
        <div className="rock flex">
          <h1>Ready to rock your world.</h1>
          <div className="btn-div-rock flex">
            <button className="rock-register">Register</button>
            <p>OR</p>
            <button className="rock-login">Login</button>
          </div>
        </div>
      </div>
      {/*end rock section landing page --------------------- */}
      <LandFooter />
    </div>
  );
}

export default Landing;
