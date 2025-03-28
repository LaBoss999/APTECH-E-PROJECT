import './Technology.css';

const Technology = () => {
  return (
    <div className="technology-page">
      <h1>Advanced Watch Technology</h1>

      {/* Section: Overview */}
      <section>
        <h2>The Evolution of Watch Technology</h2>
        <p>
          Alberto Watches integrates cutting-edge technology to enhance durability, precision, and usability.
          Our timepieces combine <strong>traditional craftsmanship</strong> with <strong>modern innovation</strong>, ensuring superior performance.
        </p>
      </section>

      {/* Section: Innovative Features */}
      <section>
        <h2>Innovative Features</h2>
        <ul>
          <li><strong>Smart Sensors:</strong> Monitors heart rate, altitude, and motion.</li>
          <li><strong>GPS Integration:</strong> Ensures accurate navigation and time synchronization.</li>
          <li><strong>Solar Charging:</strong> Eco-friendly solar-powered watches for extended battery life.</li>
        </ul>
      </section>

      {/* Section: Materials & Durability */}
      <section>
        <h2>Premium Materials & Durability</h2>
        <p>Our watches are crafted using <strong>high-quality materials</strong> to withstand extreme conditions:</p>
        <ul>
          <li><strong>Sapphire Glass:</strong> Scratch-resistant and ultra-clear display.</li>
          <li><strong>Titanium & Stainless Steel:</strong> Lightweight yet highly durable.</li>
          <li><strong>Water Resistance:</strong> Designed for depths up to 300m, perfect for divers.</li>
        </ul>
      </section>

      {/* Section: Latest Trends */}
      <section>
        <h2>Latest Trends in Watchmaking</h2>
        <p>
          The future of watches includes <strong>AI-powered timepieces</strong>, <strong>biometric security</strong>, and <strong>blockchain authentication</strong>.
          At Alberto Watches, we continue to lead the industry with cutting-edge innovations.
        </p>
      </section>
    </div>
  );
};

export default Technology;
