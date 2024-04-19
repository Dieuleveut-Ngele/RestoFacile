// ParentComponent.js
import React from 'react';
import RestaurantDetailPage from './restaurantDetailPage';

const ParentComponent = () => {
  const restaurantData = {
    name: "RestaurantA",
    image: "restaurant1.jpg",
    price: "$$$",
    city: "Paris",
    available: true,
    tablePhotos: ["table1.jpg", "table2.jpg", "table3.jpg"],
    cuisineServices: "Service de cuisine gastronomique",
    parking: "Parking gratuit disponible"
   
  };

  return (
    <div>
      <h1>Page de détail du restaurant</h1>
      <RestaurantDetailPage restaurant={restaurantData} />
    </div>
  );
}

export default ParentComponent;