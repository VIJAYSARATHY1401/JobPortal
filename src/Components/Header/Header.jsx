import React from "react";
import bannerImage from "../../assets/All Images/panel-interviewing-man-wheelchair-istock-1206394273.jpg";
import "./header.css";

const Header = () => {
  const telegramLink = "https://web.telegram.org/k/";

  return (
    <header>
      <div className="md:flex items-center mb-12 px-6">
        <div className="header-details md:w-3/5 tracking-wider">
          <h1 className="text-7xl w-auto md:w-5/6" tabIndex="0">
            Empowering Your{" "}
            <span className="custom-text text-7xl">Career Journey</span>
          </h1>
          <p className="w-auto md:w-5/6 mt-6 leading-relaxed">
            Welcome to our job portal dedicated to empowering individuals with
            physical challenges. Explore thousands of job opportunities that
            cater to your unique skills and talents.
          </p>
          <p className="w-auto md:w-5/6 mt-4 leading-relaxed">
            "The only limit to our realization of tomorrow will be our doubts of
            today." – Franklin D. Roosevelt
          </p>
          <p className="w-auto md:w-5/6 mt-4 leading-relaxed">
            We believe that everyone deserves a chance to shine and thrive in
            their professional life. It's your future. Come find it, and let us
            help you manage all your job applications from start to finish with
            ease and accessibility.
          </p>
          <button className="custom-btn mt-4" aria-label="Get Started">
            Get Started
          </button>
        </div>
        <div className="image-section md:w-1/2">
          <img
            src={bannerImage}
            alt="Banner illustrating job opportunities"
            className="rounded-lg" // Add rounded corners to the image
          />
        </div>
      </div>
      <footer
        style={{ textAlign: "center", marginTop: "20px", padding: "20px" }}
      >
        <h2 style={{ color: "#333" }}>Join Our Community!</h2>
        <p style={{ color: "#666" }}>
          Get started by joining our Telegram group for resources, support, and
          networking.
        </p>
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-button" // Add class name for styling
        >
          Join Now
        </a>
      </footer>
    </header>
  );
};

export default Header;
