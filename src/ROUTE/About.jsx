import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero">
        <h1>About Us</h1>
        <p>Discover our journey, values, and commitment to excellence.</p>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded with passion and dedication, we have been committed to
          delivering exceptional services and products for years. Our journey is
          fueled by innovation, integrity, and a desire to exceed expectations.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide top-notch solutions that enrich the lives of
          our customers. We believe in quality, transparency, and customer
          satisfaction.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-box">
            <h3>High-Quality Products</h3>
            <p>We ensure every product meets the highest standards.</p>
          </div>
          <div className="feature-box">
            <h3>Dedicated Support</h3>
            <p>Our team is available 24/7 to assist you.</p>
          </div>
          <div className="feature-box">
            <h3>Innovation & Excellence</h3>
            <p>We embrace new technologies to stay ahead.</p>
          </div>
          <div className="feature-box">
            <h3>Trusted by Thousands</h3>
            <p>Thousands of satisfied customers rely on us daily.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join Us Today</h2>
        <p>Be part of our journey and experience excellence firsthand.</p>
        <button>Learn More</button>
      </section>
    </div>
  );
};

export default AboutUs;
