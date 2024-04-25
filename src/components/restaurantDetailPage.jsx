// RestaurantDetailPage.js
import React from 'react';
import { motion } from 'framer-motion';
import dataRestaurant from '../components/data.json'
import { useParams } from 'react-router-dom';

const RestaurantDetailPage = () => {

  const data = dataRestaurant.restaurantsPopulaires
  const useparm = useParams()
  const {id } = useparm 
  console.log(id);

  const restaurant = data.find((restaurant) => restaurant.id === +id) 
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="text-gray-600 mb-2">Prix: {restaurant.price}</p>
      <p className="text-gray-600 mb-2">Ville: {restaurant.city}</p>
      <p className="text-gray-600 mb-4">Disponible: {restaurant.available ? "Oui" : "Non"}</p>
      <h2 className="text-lg font-bold mb-2">Photos des tables</h2>
      <div className="grid grid-cols-3 gap-4">
        {restaurant.tablePhotos.map((photo, id) => (
          <img key={id} src={photo} alt={`Table ${id + 1}`} className="w-full h-32 object-cover rounded-lg" />
        ))}
      </div>
      <h2 className="text-lg font-bold mb-2 mt-4">Services culinaires</h2>
      <p className="text-gray-600">{restaurant.cuisineServices}</p>
      <h2 className="text-lg font-bold mb-2 mt-4">Parking</h2>
      <p className="text-gray-600">{restaurant.parking}</p>
      
    </motion.div>
  );
}

export default RestaurantDetailPage;





// RestaurantDetailPage.js
/*import React from 'react';

const RestaurantDetailPage = ({ restaurant }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="text-gray-600 mb-2">Prix: {restaurant.price}</p>
      <p className="text-gray-600 mb-2">Ville: {restaurant.city}</p>
      <p className="text-gray-600 mb-4">Disponible: {restaurant.available ? "Oui" : "Non"}</p>
      <h2 className="text-lg font-bold mb-2">Photos des tables</h2>
      <div className="grid grid-cols-3 gap-4">
        {restaurant.tablePhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`Table ${index + 1}`} className="w-full h-32 object-cover rounded-lg" />
        ))}
      </div>
      <h2 className="text-lg font-bold mb-2 mt-4">Services culinaires</h2>
      <p className="text-gray-600">{restaurant.cuisineServices}</p>
      <h2 className="text-lg font-bold mb-2 mt-4">Parking</h2>
      <p className="text-gray-600">{restaurant.parking}</p>
      {/* Ajouter d'autres informations }
    </div>
  );
}

export default RestaurantDetailPage;*/

// RestaurantDetailPage.js
