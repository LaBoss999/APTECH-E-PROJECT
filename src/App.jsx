import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav"; // Import Navbar
import './assets/NAV BAR/nav';
import Nav from './assets/NAV BAR/nav';
import Footer from './assets/FOOTER/footer';
import Home from './assets/ROUTE/Home';
import Products from './assets/ROUTE/Products';
import Technology from "./assets/ROUTE/Technology";
import StoreLocator from "./assets/ROUTE/StoreLocator";
import Support from "./assets/ROUTE/Support";
import About from "./assets/ROUTE/About";
import Contact from "./assets/ROUTE/Contact";


// const Home = () => <h2 className="p-6">Welcome to Alberto Watch Company</h2>;
// const Products = () => <h2 className="p-6">Explore our watch collections</h2>;
// const Technology = () => <h2 className="p-6">Watch Technology & Innovations</h2>;
// const StoreLocator = () => <h2 className="p-6">Find our store near you</h2>;
// const Support = () => <h2 className="p-6">Get support for your watches</h2>;
// const About = () => <h2 className="p-6">Learn more about us</h2>;
// const Contact = () => <h2 className="p-6">Get in touch with us</h2>;

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        <Footer />
    </Router>
  );
};

export default App;
