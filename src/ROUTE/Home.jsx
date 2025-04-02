import "./Home.css";
import bgvideo from "../../src/assets/bg-video.mp4";
import watch1 from "../../src/assets/watch1.webp"
import watch2 from "../../src/assets/watch2.webp"
import watch3 from "../../src/assets/watch3.webp"


const Home = () => {

  const font ={
    fontSize: '56px',
  };

  const pfont ={
    fontSize: '22px',
  };

  return (
    <div className="home-container">
      {/* Hero Section */}

      <section className="hero">
        <video autoPlay loop muted>
          <source className="" src={bgvideo} type="video/mp4" />
        </video>
        <div className="content">
          <h1 style={font} className="content-h1">Timeless Elegance, Unmatched Precision</h1>
          <p stlye={pfont} className="content-p">Discover the finest luxury watches.</p>
          <button className="content-btn">Explore Our Collection</button>
        </div>
      </section>

      {/* Introduction */}
      <section className="about text-center">
        <h2 className="section-title">Welcome to Alberto Watch Company</h2>
        <p className="section-text">
          We blend craftsmanship with cutting-edge technology to create
          timepieces that define luxury and precision.
        </p>
      </section>

      {/* Featured Products */}
      <section className="featured-products text-center">
        <h2 className="section-title">Featured Watches</h2>
        <div className="product-grid">
          <div className="product-card">
            <img
              src={watch1}
              alt="Luxury Watch 1"
              className="product-img"
            />
            <h3 className="product-name">The Elite Gold</h3>
            <p className="product-description">
              A masterpiece in gold and precision.
            </p>
          </div>
          <div className="product-card">
            <img
              src={watch2}
              alt="Luxury Watch 2"
              className="product-img"
            />
            <h3 className="product-name">Chrono X Series</h3>
            <p className="product-description">
              Innovative design meets timeless elegance.
            </p>
          </div>
          <div className="product-card">
            <img
              src={watch3}
              alt="Luxury Watch 3"
              className="product-img"
            />
            <h3 className="product-name">Alberto Sport</h3>
            <p className="product-description">
              For those who live life on the move.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us text-center">
        <h2 className="section-title">Why Choose Us?</h2>
        <p className="section-text">
          We offer premium craftsmanship, innovative technology, and a global
          presence.
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="cta text-center">
        <h2 className="section-title">Stay Connected</h2>
        <p className="section-text">
          Subscribe for exclusive updates and offers.
        </p>
        <div className="cta-input-group">
          <input
            type="email"
            placeholder="Enter your email"
            className="cta-input"
          />
          <button className="cta-btn">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
