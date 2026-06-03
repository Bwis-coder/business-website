import { HeaderSection } from "../headerPage/header";
import baber from "/barber-cuts.jpg";
import "./home.css";

const HomePage = () => {
  return (
    <div className="main-home-container">
      <HeaderSection />
      <div className="home-subcontainer">
        <div className="header-section">
          <h1>More Than a Haircut: A Confidence Boost For Men </h1>
          <h3>
            Experience premium grooming, sharp cuts, and personalized service
            designed to help you look your best and feel confident every day
          </h3>
          <div className="stats">
            <div className="stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Happy clients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">8+</span>
              <span className="stat-label">Years exp.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-num">4.9★</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={baber} />
        </div>
      </div>
    </div>
  );
};

export { HomePage };
