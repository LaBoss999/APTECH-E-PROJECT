import { Link, useLocation } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import "./nav.css";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

const Nav = () => {
  const location = useLocation();
  const menuRef = useRef();
  const [visitorCount, setVisitorCount] = useState(0);

  // 🔢 Increment visitor count on every visit (reload/page visit)
  useEffect(() => {
    // Get the stored visitor count from localStorage
    const storedCount = localStorage.getItem("visitorCount");

    // Increment visitor count if exists
    if (storedCount) {
      const newCount = parseInt(storedCount, 10) + 1;
      localStorage.setItem("visitorCount", newCount); // Update localStorage with new count
      setVisitorCount(newCount); // Set the updated count in state
    } else {
      // If count does not exist, set it to 1 for the first visit
      localStorage.setItem("visitorCount", 1);
      setVisitorCount(1);
    }
  }, []); // Empty dependency array to ensure this runs only once on mount

  const getBorderBottomColor = () => {
    return location.pathname === "/" ? "black" : "white";
  };

  const openMenu = () => {
    if (menuRef.current) menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.style.right = "-350px";
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <nav
        style={{ borderBottom: `3px solid ${getBorderBottomColor()}` }}
        className="container mx-auto flex justify-between items-center"
        aria-label="Main Navigation"
      >
        <Link to="/">
          <h1 className="logo">ALBERTO</h1>
        </Link>
        <img
          src={menu_open}
          onClick={openMenu}
          alt="Open Menu"
          className="nav-mob-open"
        />

        <ul ref={menuRef} className="flex gap-6 nav-menu">
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="Close Menu"
            className="nav-mob-close"
          />
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400">Products</Link></li>
          <li><Link to="/technology" className="hover:text-yellow-400">Technology</Link></li>
          <li><Link to="/store-locator" className="hover:text-yellow-400">Store Locator</Link></li>
          <li><Link to="/support" className="hover:text-yellow-400">Support</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact Us</Link></li>
        </ul>

        {/* 👇 Display visitor count */}
        <div className="visitor-count">
          Visits: {visitorCount}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
