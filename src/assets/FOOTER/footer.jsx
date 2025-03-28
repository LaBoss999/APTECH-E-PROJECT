import './footer.css'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-semibold">Alberto Watches</h2>
          <p className="text-sm mt-2">
            Precision. Elegance. Innovation. Your trusted companion in timekeeping.
          </p>
  
          <ul className="flex justify-center gap-6 mt-4">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/products" className="hover:text-yellow-400">Products</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="/support" className="hover:text-yellow-400">Support</a></li>
          </ul>
  
          <div className="mt-4 text-sm opacity-70">
            <p>© {new Date().getFullYear()} Alberto Watches. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  