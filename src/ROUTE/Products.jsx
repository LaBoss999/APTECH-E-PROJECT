import React, { useState } from 'react';
import './Products.css';
import watch1 from '../assets/luxury1.jpeg';
import watch2 from '../assets/luxury2.jpeg';
import watch3 from '../assets/luxury3.jpeg';
import watch4 from '../assets/luxury9.jpeg';
import watch5 from '../assets/luxury10.jpeg';
import watch6 from '../assets/luxury6.jpeg';
import watch7 from '../assets/luxury7.jpeg';
import watch8 from '../assets/luxury8.jpeg';

const products = [
  {
    id: 1,
    name: "Chrono Master",
    price: "$499",
    description: "A classic timepiece with precision chronograph.",
    image: watch1,
  },
  {
    id: 2,
    name: "Luxury Silver",
    price: "$699",
    description: "Elegant silver wristwatch with sapphire crystal.",
    image: watch2,
  },
  {
    id: 3,
    name: "Black Stealth",
    price: "$899",
    description: "A premium black stainless steel design.",
    image: watch3,
  },
  {
    id: 4,
    name: "Gold Classic",
    price: "$1099",
    description: "Timeless gold watch with automatic movement.",
    image: watch4,
  },
  {
    id: 5,
    name: "Ocean Diver",
    price: "$799",
    description: "A rugged dive watch with 300m water resistance.",
    image: watch5,
  },
  {
    id: 6,
    name: "Nightfall Phantom",
    price: "$999",
    description: "A sleek black watch with luminous dials for night visibility.",
    image: watch6,
  },
  {
    id: 7,
    name: "Titanium Edge",
    price: "$1299",
    description: "Ultra-light titanium watch with scratch-resistant coating.",
    image: watch7,
  },
  {
    id: 8,
    name: "Royal Blue",
    price: "$1499",
    description: "A luxury timepiece with a deep blue dial and gold accents.",
    image: watch8,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <h1>Explore Our Premium Watch Collection</h1>
        <p>Crafted with precision, style, and innovation.</p>
      </section>

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
    </div>
  );
};

export default Products;
