import "./Home.css";
import bgvideo from "../../src/assets/bg-video.mp4";
import watch9 from "../assets/luxury1.jpeg";
import watch10 from "../assets/luxury2.jpeg";
import watch11 from "../assets/luxury3.jpeg";
import watch4 from "../assets/luxury9.jpeg";
import watch5 from "../assets/luxury10.jpeg";
import watch6 from "../assets/luxury6.jpeg";
import watch7 from "../assets/watch9.webp";
import watch8 from "../assets/luxury11.jpeg";
import watch1 from "../../src/assets/luxury12.jpg";
import watch2 from "../../src/assets/luxury13.jpg";
import watch3 from "../../src/assets/luxury14.jpg";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Rolex Oyster Perpetual",
    price: "$6,500",
    description:
      "A timeless and versatile design from Rolex, featuring a self-winding movement and a sleek stainless steel case.",
    image: watch1,
  },
  {
    id: 2,
    name: "Cartier Santos de Cartier",
    price: "$7,050",
    description:
      "An iconic square-shaped watch with a rich history, offering a blend of elegance and functionality.",
    image: watch2,
  },
  {
    id: 3,
    name: "Omega Speedmaster Professional Moonwatch",
    price: "$6,600",
    description:
      "Known for its association with NASA missions, this chronograph is a symbol of durability and precision.",
    image: watch3,
  },
  {
    id: 4,
    name: "Audemars Piguet Royal Oak Selfwinding",
    price: "$28,600",
    description:
      "A legendary design featuring a distinctive octagonal bezel and integrated bracelet, embodying luxury and innovation.",
    image: watch4,
  },
  {
    id: 5,
    name: "Patek Philippe Calatrava",
    price: "$33,113",
    description:
      "A pure dress watch tradition, offering timeless elegance and exceptional craftsmanship.",
    image: watch5,
  },
  {
    id: 6,
    name: "Diesel Mr. Daddy 2.0",
    price: "$325",
    description:
      "A bold and edgy watch with oversized design, featuring multiple time zones and a striking appearance.",
    image: watch6,
  },
  {
    id: 7,
    name: "Fossil Townsman Chronograph",
    price: "$145",
    description:
      "A stylish chronograph watch with a vintage-inspired design, offering both functionality and classic appeal.",
    image: watch7,
  },
  {
    id: 8,
    name: "Michael Kors Slim Runway",
    price: "$250",
    description:
      "An elegant and minimalist watch, perfect for adding a touch of sophistication to any outfit.",
    image: watch8,
  },
  {
    id: 9,
    name: "Skagen Hagen Connected",
    price: "$195",
    description:
      "A modern smartwatch combining Scandinavian design with smart features, keeping you connected in style.",
    image: watch9,
  },
];

const Home = () => {

 const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const font = {
    fontSize: "56px",
  };

  const pfont = {
    fontSize: "22px",
  };

  return (
    <div className="home-container">
      {/* Hero Section */}

      <section className="hero">
        <video autoPlay loop muted>
          <source className="" src={bgvideo} type="video/mp4" />
        </video>
        <div className="content">
          <h1 style={font} className="content-h1">
            Timeless Elegance, Unmatched Precision
          </h1>
          <p stlye={pfont} className="content-p">
            Discover the finest luxury watches.
          </p>
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

        {/* Products Grid */}
        <section className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <span className="price">{product.price}</span>
              <button className="buy-btn" onClick={() => openModal(product)}>
                View Details
              </button>
            </div>
          ))}
        </section>

        {/* Modal (Popup) */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
              <img src={selectedProduct.image} alt={selectedProduct.name} />
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <span className="price">{selectedProduct.price}</span>
            </div>
          </div>
        )}
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
