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
    image: 'https://media.istockphoto.com/id/843610508/fr/photo/int%C3%A9rieur-du-restaurant-cosy-style-loft.jpg?s=612x612&w=0&k=20&c=xkfvApjh2FTHTmiO6QFwRLHy_251G-lGDXo8bzw_9UM=',
    name: 'RestaurantA',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: true,
    tablePhotos: ["table1.jpg", "table2.jpg", "table3.jpg"],
    cuisineServices: "Service de cuisine gastronomique",
    parking: "Parking gratuit disponible"
  },
  {
    image: 'https://media.istockphoto.com/id/1079901206/fr/photo/rendu-3d-de-lint%C3%A9rieur-du-restaurant-de-luxe.jpg?s=612x612&w=0&k=20&c=ga2tf5durO_EesaEHoqwverNsD0XF0GwhPugoQqA-6Y=',
    name: 'RestaurantB',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://media.istockphoto.com/id/1288064106/fr/photo/int%C3%A9rieur-vide-de-restaurant.jpg?s=612x612&w=0&k=20&c=WpEEMXPKwJLnhS-_qgonAQnnHKDf-FyvXfcxts5swjQ=',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://media.istockphoto.com/id/1343182422/fr/photo/restaurant-design-rustique-vide-avec-des-meubles-en-bois-et-quelques-plantes-d%C3%A9coratives.jpg?s=612x612&w=0&k=20&c=7damQj9yqS4fHhbi2E5C9r3zaOsdgnkwCAyAMVym9Ms=',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://media.istockphoto.com/id/1159992039/fr/photo/restaurant-confortable-pour-se-r%C3%A9unir-avec-des-amis.jpg?s=612x612&w=0&k=20&c=Xhgp08MIGB_MSA0A20r5N4CrrweO66iZYBlfsSU5R3E=',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://media.istockphoto.com/id/478432824/fr/photo/mode-int%C3%A9rieur-%C3%A9l%C3%A9gant-restaurant.jpg?s=612x612&w=0&k=20&c=UHHFsm2frMV8i005fpkgOwhYJyQLajutYEKSRFSLeBA=',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
];

const restaurantsRecommandes = [
  {
    id: '1',
    image: 'https://media.istockphoto.com/id/1248298343/fr/photo/rendu-3d-dun-int%C3%A9rieur-de-restaurant-de-luxe-la-nuit.jpg?s=612x612&w=0&k=20&c=CQtf6hfxGGPP3EN52yW-WisCws5Kst-bWM6LWmMMEIU=',
    name: 'RestaurantA',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: true,
    tablePhotos: ["table1.jpg", "table2.jpg", "table3.jpg"],
    cuisineServices: "Service de cuisine gastronomique",
    parking: "Parking gratuit disponible"
  },
  {
    id: '2',
    image: 'https://media.istockphoto.com/id/626311516/fr/photo/chef-dans-un-h%C3%B4tel-ou-restaurant-kitchen-cooking-uniquement-les-mains.jpg?s=612x612&w=0&k=20&c=pcOvFLud7nH7sSU_KWcyJophE3m4tfGE9y_hrQktLvQ=',
    name: 'RestaurantB',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    id: '3',
    image: 'https://media.istockphoto.com/id/1285009750/fr/photo/couples-joyeux-de-sourire-sasseyant-dans-un-restaurant-ayant-le-d%C3%AEner-et-bavardant-homme.jpg?s=612x612&w=0&k=20&c=a4pFdnY5MtQf8DvaWGX51IvTObeXnYb3yr4cSwPiEkc=',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    image: 'https://media.istockphoto.com/id/991829024/fr/photo/couple-manger-de-la-salade-de-quinoa-et-d%C3%AEner-sant%C3%A9-au-restaurant.jpg?s=612x612&w=0&k=20&c=qSREs61FaBfKpANgmXQaC7aY2uJxmheAP-1jFaOVtqI=',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    id: '4',
    image: 'https://media.istockphoto.com/id/1178591496/fr/photo/vue-%C3%A0-travers-la-fen%C3%AAtre-du-personnel-et-des-clients-%C3%A0-lint%C3%A9rieur-du-restaurant-buns-and-buns.jpg?s=612x612&w=0&k=20&c=fUE7J9lSgL_M81yosoFLQBznsX14hNedrpILj1YaWJo=',
    name: 'RestaurantD',
    price: '$$$',
    city: 'Lorem Ipsum',
    available: false
  },
  {
    id: '5',
    image: 'https://media.istockphoto.com/id/1428594094/fr/photo/int%C3%A9rieur-de-caf%C3%A9-vide-avec-tables-en-bois-cafeti%C3%A8re-p%C3%A2tisseries-et-suspensions.jpg?s=1024x1024&w=is&k=20&c=G0I_0mtBg532iRQXicXIthe6iipXvV44V4t3wXPQ3mA=',
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

