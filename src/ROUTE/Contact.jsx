import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Hero Section */}
      <section className="her">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with us today!</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <h2>Our Contact Details</h2>
        <div className="info-grid">
          <div className="info-box">
            <h3>📍 Address</h3>
            <p>123 Business Street, Lagos, Nigeria</p>
          </div>
          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+234 810 123 4567</p>
          </div>
          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>contact@monterodesigns.com</p>
          </div>
        </div>
      </section>

      {/* Google Maps Embed (Optional) */}
      <section className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?q=Lagos,%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
