import React, { useState, useEffect, useRef } from 'react';
import { SearchCircleIcon, UserIcon } from '@heroicons/react/outline';

//import ConfirmationPopup from './ConfirmationPop-up';

const restaurants = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

const RestaurantReservationForm = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [civility, setCivility] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeNews, setSubscribeNews] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopups, setShowPopups] = useState(false);
  

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://capstone2-c2-dieuleveut-ngele.onrender.com/api/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des restaurants :', error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleReservationFormClick = async () => {
    try {
      const response = await axios.post('https://capstone2-c2-dieuleveut-ngele.onrender.com/api/postreservation', {
        civility,
        firstName,
        lastName,
        phone,
        email,
        subscribeNews,
      });

      console.log("Réponse de l'API :", response.data);
      setShowPopups(true);
      sendConfirmationEmail();
      handleConfirmReservation();
    } catch (error) {
      console.error('Erreur lors de la demande de réservation :', error);
    }
  };

  const sendConfirmationEmail = () => {

    const subject = 'Confirmation de réservation';
    const message = 'Votre réservation a été confirmée. Merci!';
    
    
    console.log(`Email envoyé à ${email} avec le sujet : ${subject} et le message : ${message}`);
  };

  const sendEmail = () => {
    //const email = 'destinataire@example.com';
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    
    fetch('https://capstone2-c2-dieuleveut-ngele.onrender.com/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    .then(response => {
      if (response.ok) {
        console.log('Email envoyé avec succès !');
      } else {
        console.error("Erreur lors de l'envoi de l'email");
      }
    })
    .catch(error => {
      console.error('Erreur lors de la requête :', error);
    });
  };
  
  const handleReservationClick = () => {
    setShowPopup(true);
    sendConfirmationEmail();
  };

  const handleConfimationClick = () => {
    setShowPopups(true);
  };

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setInputValue(input);

    const filteredResults = restaurants.filter(restaurant => restaurant.toLowerCase().startsWith(input));
    setFilteredRestaurants(filteredResults);
    setShowDropdown(false);
  };

  const handleRestaurantClick = (restaurant) => {
    setInputValue(restaurant);
    setFilteredRestaurants([]);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-slate-800 p-5 md:p-10 mb-5">
      
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-90 flex items-center justify-center">
          <div className="bg-black p-8 rounded-lg">
          <form  className="space-y-4">
            <h2 className="text-center text-2xl mb-4 font-Georgia text-white">Remplissez ce formulaire</h2>   
        <div>
          <label className="block mb-2 font-semibold text-white">Civilité</label>
          <select
            name="civility"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setCivility(e.target.value)}
          >
            <option value="">Sélectionner</option>
            <option value={civility}>Monsieur</option>
            <option value={civility}>Madame</option>
            <option value={civility}>Autre</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold text-white">Prénom</label>
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-white">Nom</label>
          <div className="mt-2.5">
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-2 font-semibold text-white">Téléphone</label>
          <input
            type="text"
            name="phone"
            placeholder="+243 824 045 533"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="sm:col-span-2">
          <label name="email" className="block mb-2 font-semibold text-white">Email</label>
          <input
            type="email"
            name="email"
            placeholder="restofacile@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
       
        <div>
          <label className="flex items-center space-x-2 text-white">
            <input
              type="checkbox"
              name="subscribeNews"
              className="form-checkbox"
              value={subscribeNews}
              onChange={(e) => setSubscribeNews(e.target.value)}
            />
            <span>Je souhaite recevoir les actualités et promotions par email.</span>
          </label>
        </div>
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full mt-4" onClick={handleConfimationClick}>
            Envoyer une demande de réservation
            </button>
        
      </form>
            
          </div>
        </div>
      )}
      <h2 className="text-white text-center mb-4 font-Georgia">
        Qu'attendez-vous ? Trouvez votre table pour toute occasion
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 ">
      {showPopups && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-90 flex items-center justify-center">
        <div className="bg-black p-8 rounded-lg">
          <h2 className="text-center text-2xl mb-4 font-Georgia text-white">Confirmation de réservation</h2>
          <p className="text-white mb-4">Votre réservation a été confirmée. Un email de confirmation vous sera envoyé.</p>
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg" onClick={() => setShowPopups()}>
            Fermer
          </button>
        </div>
      </div>
    )}
      
<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
  <div className="flex items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <input
      type="date"
      id="date"
      name="date"
      className="p-2 outline-none w-full"
      placeholder="Apr 8, 2024"
    />
  </div>
  <div className="flex items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <input
      type="time"
      id="time"
      name="time"
      className="p-2 outline-none w-full"
      placeholder="7:00 PM"
    />
  </div>
  <div className="flex items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <UserIcon className="h-6 w-6 text-gray-700 ml-2" />
    <select id="personnes" name="personnes" className="p-2 outline-none w-full">
      <option value="1">1 personne</option>
      <option value="2">2 personnes</option>
      <option value="3">3 personnes</option>
      <option value="4">4 personnes</option>
      <option value="5">5 personnes</option>
      <option value="6">6 personnes</option>
      <option value="7">7 personnes</option>
      <option value="8">8 personnes</option>
      <option value="9">+9 personnes</option>
    </select>
  </div>
  <div className="flex gap-2 h-11 items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <SearchCircleIcon className="h-6 w-6 text-gray-700 ml-2" />
    <input type="text" placeholder="Search restaurants..." value={inputValue} onChange={handleInputChange}
      className="bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-full flex-grow"
    />
    {showDropdown && (
      <ul ref={dropdownRef} className="absolute z-10 ml-[2%] top-full w-44 bg-white border border-gray-200 rounded-lg shadow-md max-h-32 overflow-y-auto">
        {filteredRestaurants.map(restaurant => (
          <li key={restaurant} onClick={() => handleRestaurantClick(restaurant)} className="cursor-pointer hover:bg-gray-200 p-1">
            {restaurant}
          </li>
        ))}
      </ul>
    )}
  </div>

        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto" onClick={handleReservationClick}>
          Réserver
        </button>
        
      </div>
    </div>
  </div>
  );
};

export default RestaurantReservationForm; 



/*import React, { useState, useEffect, useRef } from 'react';
//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { SearchCircleIcon, UserIcon } from '@heroicons/react/outline';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

const RestaurantReservationForm = () => {

  const navigate = useNavigate(); 

  const handleReservationClick = () => {
    navigate('/reservation'); 
  };

  const [inputValue, setInputValue] = useState('');
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setInputValue(input);

    const filteredResults = fruits.filter(fruit => fruit.toLowerCase().startsWith(input));
    setFilteredFruits(filteredResults);
    setShowDropdown(true);
  };

  const handleFruitClick = (fruit) => {
    setInputValue(fruit);
    setFilteredFruits([]);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-slate-800 p-5 md:p-10 mb-5">
      <h2 className="text-white text-center mb-4 font-Georgia">
  Qu'attendez-vous ? Trouvez votre table pour toute occasion
</h2>
<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 relative">
  <div className="flex items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <input
      type="date"
      id="date"
      name="date"
      className="p-2 outline-none w-full"
      placeholder="Apr 8, 2024"
    />
  </div>
  <div className="flex items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <input
      type="time"
      id="time"
      name="time"
      className="p-2 outline-none w-full"
      placeholder="7:00 PM"
    />
  </div>
  <div className="flex items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <UserIcon className="h-6 w-6 text-gray-700 ml-2" />
    <select id="personnes" name="personnes" className="p-2 outline-none w-full">
      <option value="1">1 personne</option>
      <option value="2">2 personnes</option>
      <option value="3">3 personnes</option>
      <option value="4">4 personnes</option>
      <option value="5">5 personnes</option>
      <option value="6">6 personnes</option>
      <option value="7">7 personnes</option>
      <option value="8">8 personnes</option>
      <option value="9">+9 personnes</option>
    </select>
  </div>
  <div className="flex gap-2 h-11 items-center border-2 border-white bg-white rounded-lg w-full md:w-auto">
    <SearchCircleIcon className="h-6 w-6 text-gray-700 ml-2" />
    <input
      type="text"
      placeholder="Search restaurants..."
      value={inputValue}
      onChange={handleInputChange}
      className="bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-full flex-grow"
    />
    {showDropdown && (
      <ul ref={dropdownRef} className="absolute z-10 ml-[2%] top-full w-44 bg-white border border-gray-200 rounded-lg shadow-md max-h-32 overflow-y-auto">
        {filteredFruits.map(fruit => (
          <li key={fruit} onClick={() => handleFruitClick(fruit)} className="cursor-pointer hover:bg-gray-200 p-1">
            {fruit}
          </li>
        ))}
      </ul>
    )}
  </div>
  <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto"
    onClick={handleReservationClick}
  >
    Réserver
  </button>
</div>

    </div>
  );
};

export default RestaurantReservationForm; */
