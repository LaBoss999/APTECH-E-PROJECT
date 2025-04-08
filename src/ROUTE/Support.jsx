import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="support-container">
      <div className="sup-header">
      <h1 className="support-title">Customer Support</h1><br />
      <p className="support-text">
        Welcome to Alberto Watch Company’s support center. Find answers to your
        questions or contact our team.
      </p>
      </div>

      <div className="support-sections">
        <div className="support-box">
          <h2>FAQs</h2><br />
          <p>Find quick answers to common questions.</p>
          <button className="support-btn">View FAQs</button>
        </div>

        <div className="support-box">
          <h2>Warranty & Repairs</h2><br />
          <p>Learn about warranty coverage and repair services.</p>
          <button className="support-btn">Warranty Info</button>
        </div>

        <div className="support-box">
          <h2>Contact Support</h2><br />
          <p>Need further help? Get in touch with our team.</p>
          <button className="support-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
