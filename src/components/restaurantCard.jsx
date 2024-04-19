// RestaurantCard.js
import React from 'react';

const RestaurantCard = ({ image, name, price, city, available }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-2 rounded-lg" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Prix: {price}</p>
      <p className="text-gray-600 mb-2">Ville: {city}</p>
      <p className="text-gray-600">Disponible: {available ? "Oui" : "Non"}</p>
    </div>
  );
}

export default RestaurantCard;