import React, { useState } from 'react';
import './Tabs.css'
const Tabs = ({ cities, defaultCity, onTabClick }) => {
  const [activeCity, setActiveCity] = useState(defaultCity);

  const handleTabClick = (city) => {
    setActiveCity(city);
    onTabClick(city);
  };

  return (
    <div className="tabs">
      {cities.map((city) => (
        <div
          key={city}
          className={`tab ${activeCity === city ? 'active' : ''}`}
          onClick={() => handleTabClick(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
