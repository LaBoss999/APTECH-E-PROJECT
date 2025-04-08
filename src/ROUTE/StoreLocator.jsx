import "./StoreLocator.css";

const StoreLocator = () => {
  return (
    <div className="store-locator">
      <div className="store-header">
        <h1>Find Our Store Near You</h1>

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Enter city or ZIP code" />
          <button>Search</button>
        </div>
      </div>

      {/* Store Locations */}
      <section>
        <h2>Our Store Locations</h2>
        <br />
        <br />
        <ul>
          <li>
            <strong>Lagos:</strong> 123 Victoria Island, Lagos, Nigeria
          </li>
          <li>
            <strong>Abuja:</strong> 45 Maitama Crescent, Abuja
          </li>
          <li>
            <strong>Port Harcourt:</strong> 78 Trans-Amadi Road, Port Harcourt
          </li>
        </ul>
      </section>

      {/* Services Offered */}
      <section>
        <h2>Services Available at Our Stores</h2>
        <br />
        <br />
        <ul className="services-list">
          <li>Watch Repairs & Maintenance</li>
          <li>Exclusive Collections & Limited Editions</li>
          <li>Customization & Engraving Services</li>
        </ul>
      </section>
    </div>
  );
};

export default StoreLocator;
