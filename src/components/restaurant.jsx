// RestaurantsPage.js
/*import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './restaurantCard';

const restaurants = [
  {
    image: 'https://galleria.co.ke/storage/2022/05/11-400x400.jpg',
    name: 'RestaurantA',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: true,
    tablePhotos: ["table1.jpg", "table2.jpg", "table3.jpg"],
    cuisineServices: "Service de cuisine gastronomique",
    parking: "Parking gratuit disponible"
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantB',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantC',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantB',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantB',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  }
];

const Restaurants = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {restaurants.map((restaurant, index) => (
        <Link key={index} to={`/restaurant/${index}`}>
          <RestaurantCard {...restaurant} />
        </Link>
      ))}
    </div>
  );
}

export default Restaurants;*/

import React from 'react';
import RestaurantCard from './restaurantCard';
import { Link } from 'react-router-dom';


const restaurantsPopulaires = [
  {
    image: 'https://galleria.co.ke/storage/2022/05/11-400x400.jpg',
    name: 'RestaurantA',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: true,
    tablePhotos: ["table1.jpg", "table2.jpg", "table3.jpg"],
    cuisineServices: "Service de cuisine gastronomique",
    parking: "Parking gratuit disponible"
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantB',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
];

const restaurantsRecommandes = [
  {
    image: 'https://galleria.co.ke/storage/2022/05/11-400x400.jpg',
    name: 'RestaurantA',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: true,
    tablePhotos: ["table1.jpg", "table2.jpg", "table3.jpg"],
    cuisineServices: "Service de cuisine gastronomique",
    parking: "Parking gratuit disponible"
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantB',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://galleria.co.ke/storage/2022/05/5-400x400.jpg',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
];

const RestaurantList = ({ restaurants, titre }) => (
  
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{titre}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {restaurants.map((restaurant, index) => (
        <Link key={index} to={`/restaurant/${index}`}>
        <RestaurantCard {...restaurant} />
      </Link>
      ))}
    </div>
  </div>
);

const title = () => (
  <div className="p-4">
    <RestaurantList restaurants={restaurantsRecommandes} titre="Restaurants Proposés" />
    <RestaurantList restaurants={restaurantsPopulaires} titre="Restaurants Populaires" /> 
  </div>
);

export default title;

