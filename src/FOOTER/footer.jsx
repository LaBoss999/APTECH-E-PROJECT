import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-title">Alberto Watches</h2>
          <p className="footer-description">
            Precision. Elegance. Innovation. Your trusted companion in timekeeping.
          </p>
        </div>

        <ul className="footer-nav">
          <li><a href="/" className="footer-link">Home</a></li>
          <li><a href="/products" className="footer-link">Products</a></li>
          <li><a href="/about" className="footer-link">About Us</a></li>
          <li><a href="/contact" className="footer-link">Contact</a></li>
          <li><a href="/support" className="footer-link">Support</a></li>
        </ul>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Alberto Watches. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
