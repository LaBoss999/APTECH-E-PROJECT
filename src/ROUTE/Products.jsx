import React from 'react';
import './Products.css';

const products = [
  {
    id: 1,
    name: "Chrono Master",
    price: "$499",
    description: "A classic timepiece with precision chronograph.",
    image: "/assets/products/watch1.jpg"
  },
  {
    id: 2,
    name: "Luxury Silver",
    price: "$699",
    description: "Elegant silver wristwatch with sapphire crystal.",
    image: "/assets/products/watch2.jpg"
  },
  {
    id: 3,
    name: "Black Stealth",
    price: "$899",
    description: "A premium black stainless steel design.",
    image: "/assets/products/watch3.jpg"
  },
  {
    id: 4,
    name: "Gold Classic",
    price: "$1099",
    description: "Timeless gold watch with automatic movement.",
    image: "/assets/products/watch4.jpg"
  }
];

const Products = () => {
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
            <p>{product.description}</p>
            <span className="price">{product.price}</span>
            <button className="buy-btn">View Details</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
