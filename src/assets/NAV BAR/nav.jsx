import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center" aria-label="Main Navigation">
        {/* Logo Placeholder */}
        <Link to="/">
          <img 
            src="/assets/logo.png"  // Change this to your actual logo path
            alt="Alberto Company Watches Logo"
            className="h-10"  // Adjust height as needed
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
          <li><Link to="/technology" className="hover:text-yellow-400">Technology</Link></li>
          <li><Link to="/store-locator" className="hover:text-yellow-400">Store Locator</Link></li>
          <li><Link to="/support" className="hover:text-yellow-400">Support</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
