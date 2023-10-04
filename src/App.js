import React, { useState } from 'react';
import Tabs from './Components/Tab'
import PropertyDisplay from './Components/PropertyDisplay';

function App() {
  const cities = ['London', 'New York', 'Paris', 'Mumbai'];
  const defaultCity = 'London';

  const [activeCity, setActiveCity] = useState(defaultCity);

  const handleTabClick = (city) => {
    setActiveCity(city);
  };

  return (
    <div className="App">
      <h1>Hotel Listing</h1>
      <Tabs cities={cities} defaultCity={defaultCity} onTabClick={handleTabClick} />
      <PropertyDisplay activeCity={activeCity} />
    </div>
  );
}

export default App;
  