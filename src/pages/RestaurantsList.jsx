import React, { useState } from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Restaurant A',
    image: 'https://img.freepik.com/photos-premium/restaurant-luxueux-palmiers-interieur-grand-atrium-verre-du-bois_295714-6213.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    name: 'Restaurant B',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-typiquement-francais-tables-chaises_1147-445.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 4,
    name: 'Restaurant C',
    image: 'https://img.freepik.com/photos-premium/restaurant-mur-brique-table-chaises-lampe_1078211-297824.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 5,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/bar-restaurant-comptoir-style-contemporain-rendu-3d_295714-3565.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 6,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/minsk-belarus-mai-2020-salle-banquet-table-appareils-dans-restaurant-luxe-elite_97694-11798.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 7,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/restaurant-luxueux-palmiers-interieur-grand-atrium-verre-murs-bois_295714-6229.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 8,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3394.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 9,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/salon-canape-interieur-du-salon-dans-appartement-loft_724662-1372.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 10,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/calmars-crus-assiette-tabel-bois-jeune-fille-mangeant-nourriture-chinoise_724662-1338.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 11,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3392.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 12,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/restaurant-val-s-populaire-freret-street-ombre-palmier-pendant-journee-ete_724662-2033.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 13,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/salle-restaurant-beaucoup-table_140725-6309.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 14,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/meubles-bois-plantes-pot-par-mur-photo-au-cafe_175935-929.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 15,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/cafe-francais-atmospherique-interieur-charmant-confortable-dans-lumiere-du-matin-intime-nostalgique-elegant-parisien-generative-ai_742252-9595.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 16,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-open-space-nouveau-concept_140725-7438.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 17,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3392.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 18,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/table-diner-aliments-boissons-gazeuses-dans-restaurant_114579-3319.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 19,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/16-aout-2017-klaipeda-lituanie-cabine-forme-restaurant-dans-grand-voilier_217593-8602.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 20,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/salle-privee-du-restaurant-chaises-bleues-murs-blancs-cheminee-grande-fenetre_140725-8454.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 21,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/salle-restaurant-chaises-bleues-verres-bleus-table_140725-8027.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
];

const RestaurantAllList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=''>
      <div className="mx-auto max-w-2xl text-center mt-10">
        <input
          type="text"
          placeholder="Rechercher un restaurant"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les différents restaurants de la ville</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 rounded-sm">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white p-4 shadow-md mb-10">
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover mb-4 rounded-sm" />
            <h2 className="text-lg font-bold">{restaurant.name}</h2>
            <p className="text-gray-600 mb-4">{restaurant.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">En savoir plus</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantAllList;



/*import React from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Restaurant A',
    image: 'https://img.freepik.com/photos-premium/restaurant-luxueux-palmiers-interieur-grand-atrium-verre-du-bois_295714-6213.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    name: 'Restaurant B',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-typiquement-francais-tables-chaises_1147-445.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant C',
    image: 'https://img.freepik.com/photos-premium/restaurant-mur-brique-table-chaises-lampe_1078211-297824.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/bar-restaurant-comptoir-style-contemporain-rendu-3d_295714-3565.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/minsk-belarus-mai-2020-salle-banquet-table-appareils-dans-restaurant-luxe-elite_97694-11798.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/restaurant-luxueux-palmiers-interieur-grand-atrium-verre-murs-bois_295714-6229.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3394.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/salon-canape-interieur-du-salon-dans-appartement-loft_724662-1372.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/calmars-crus-assiette-tabel-bois-jeune-fille-mangeant-nourriture-chinoise_724662-1338.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3392.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/restaurant-val-s-populaire-freret-street-ombre-palmier-pendant-journee-ete_724662-2033.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/salle-restaurant-beaucoup-table_140725-6309.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/meubles-bois-plantes-pot-par-mur-photo-au-cafe_175935-929.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/cafe-francais-atmospherique-interieur-charmant-confortable-dans-lumiere-du-matin-intime-nostalgique-elegant-parisien-generative-ai_742252-9595.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-open-space-nouveau-concept_140725-7438.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/restaurant-interieur_1127-3392.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/table-diner-aliments-boissons-gazeuses-dans-restaurant_114579-3319.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-premium/16-aout-2017-klaipeda-lituanie-cabine-forme-restaurant-dans-grand-voilier_217593-8602.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/salle-privee-du-restaurant-chaises-bleues-murs-blancs-cheminee-grande-fenetre_140725-8454.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    id: 2,
    name: 'Restaurant D',
    image: 'https://img.freepik.com/photos-gratuite/salle-restaurant-chaises-bleues-verres-bleus-table_140725-8027.jpg?size=626&ext=jpg&uid=R142855166&ga=GA1.1.783867296.1693781121&semt=ais',
    description: 'Sed do eiusmod tempor incididunt ut labore.',
  },
];

const RestaurantAllList = () => {
  return (
    <div className=''>
       <div className="mx-auto max-w-2xl text-center mt-10">
        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les differents restaurants de la ville</p>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 rounded-sm">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="bg-white p-4 shadow-md mb-10">
          <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover mb-4 rounded-sm" />
          <h2 className="text-lg font-bold">{restaurant.name}</h2>
          <p className="text-gray-600 mb-4">{restaurant.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">En savoir plus</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default RestaurantAllList; 

/*
import React, { useState, useEffect } from 'react';

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div>
      <h1>Liste des restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>Ville : {restaurant.city}</p>
            <p>Disponibilité : {restaurant.availability}</p>
            <p>Prix : {restaurant.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsList; */

