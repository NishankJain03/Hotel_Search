import React, { useState, useEffect } from 'react';
import './PropertyDisplay.css'
const PropertyDisplay = ({ activeCity }) => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(3); // Number of properties to initially display
  const propertiesPerPage = 3; // Number of properties to load on "Show More"

  useEffect(() => {
    // Fetch and parse the JSON file from the public directory
    fetch('/hotel.json') // Note: Use the relative path to your JSON file
      .then((response) => response.json())
      .then((data) => {
        // Assuming your JSON data is structured like { "London": [...], "New York": [...], ... }
        const cityProperties = data[activeCity] || [];
        setProperties(cityProperties);
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });
  }, [activeCity]);

  const handleShowMoreClick = () => {
    setVisibleProperties(visibleProperties + propertiesPerPage);
  };

  return (
    <div className="property-display">
      <h2>Properties in {activeCity}</h2>
      {properties.length === 0 ? (
        <p>No properties available in {activeCity}</p>
      ) : (
        <div className="property-list">
          {properties.slice(0, visibleProperties).map((property, index) => (
            <div key={property.id} className="property-card">
                  <img
                src={property.imageUrl}
                alt='Hotel'
                style={{ maxWidth: '200px', maxHeight: '200px' }} // Adjust the max width and max height as needed
              /><br/>
              <strong>Street Name:</strong> {property.streetName}<br />
              <strong>Room:</strong> {property.room}<br />
              <strong>Bed:</strong> {property.bed}<br />
              <strong>Sqft:</strong> {property.sqft}<br />
              <strong>Rent:</strong> ${property.rent} per month
            </div>
          ))}
        </div>
      )}
      {visibleProperties < properties.length && (
        <button className="show-more-button" onClick={handleShowMoreClick}>
          Show More
        </button>
      )}
    </div>
  );
};

export default PropertyDisplay;
