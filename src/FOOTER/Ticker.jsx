import React, { useState, useEffect } from 'react';
import './Ticker.css';

function Ticker() {
  const [dateTime, setDateTime] = useState(new Date());
  const [location, setLocation] = useState('Locating...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocation not supported by this browser.');
        setLocation('Location not supported');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
              {
                headers: {
                  'User-Agent': 'your-app-name', // replace this with your app's name
                  'Accept-Language': 'en',
                },
              }
            );

            const data = await response.json();
            const place = data.address;
            const locationText = `${place.state || place.city || place.county || 'Unknown'}, ${place.country || ''}`;
            setLocation(locationText);
          } catch (err) {
            setError('Failed to fetch location');
            setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`);
          }
        },
        (err) => {
          setError(`Error getting location: ${err.message}`);
          setLocation('Location unavailable');
        }
      );
    };

    getLocation();
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = dateTime.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  });

  const tickerText = `${formattedDateTime} | Location: ${location}`;

  return (
    <div className="ticker-container">
      <div className="ticker-text">
        {tickerText}
        {error && <span className="error"> - {error}</span>}
      </div>
    </div>
  );
}

export default Ticker;
