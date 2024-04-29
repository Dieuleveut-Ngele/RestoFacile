/*import { CalendarIcon, ClockIcon, LocationMarkerIcon, SearchCircleIcon, UserIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

const RestaurantReservationForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredFruits, setFilteredFruits] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    setInputValue(input);

    const filteredResults = fruits.filter(fruit => fruit.toLowerCase().startsWith(input));
    setFilteredFruits(filteredResults);
  };


  const handleFruitClick = (fruit) => {
    setInputValue(fruit);
    setFilteredFruits([]);
  };

  return (
    <div className="bg-slate-800 p-5 md:p-10 mb-5">
      
      <h2 className="text-white text-center mb-4 font-Georgia">
        Qu'attendez-vous ? Trouvez votre table pour toute occasion
      </h2>
      <div className="flex border flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <input
            type="date"
            id="date"
            name="date"
            className="p-2 outline-none"
            placeholder="Apr 8, 2024"
          />
        </div>
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <input
            type="time"
            id="time"
            name="time"
            className="p-2 outline-none"
            placeholder="7:00 PM"
          />
        </div>
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <UserIcon className="h-6 w-6 text-gray-700 ml-2" />
          <select id="personnes" name="personnes" className="p-2 outline-none">
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
        <div className="flex gap-2 h-11 items-center ">

        <SearchCircleIcon className="h-6 w-6 text-gray-700 ml-2" />
        
          <input
            type="text"
            placeholder="Search restaurants..."
            value={inputValue}
            onChange={handleInputChange}
            className="border-2 border-white bg-white rounded-lg"
          />
          <ul className="p-2 outline-none">
            {filteredFruits.map(fruit => (
              <li key={fruit} onClick={() => handleFruitClick(fruit)} className="cursor-pointer hover:bg-gray-200 p-1">
                {fruit}
              </li>
            ))}
          </ul>
        </div>
       
        <button 
        className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
        
        >
          Réserver
        </button>
        
      </div>
    </div>
  );
};

export default RestaurantReservationForm;*/

import React, { useState, useEffect, useRef } from 'react';
import { SearchCircleIcon, UserIcon } from '@heroicons/react/outline';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

const RestaurantReservationForm = () => {
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
      <div className="flex  flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 relative">
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <input
            type="date"
            id="date"
            name="date"
            className="p-2 outline-none"
            placeholder="Apr 8, 2024"
          />
        </div>
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <input
            type="time"
            id="time"
            name="time"
            className="p-2 outline-none"
            placeholder="7:00 PM"
          />
        </div>
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <UserIcon className="h-6 w-6 text-gray-700 ml-2" />
          <select id="personnes" name="personnes" className="p-2 outline-none">
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
        <div className="flex gap-2 h-11 items-center border-2 border-white bg-white rounded-lg ">
          <SearchCircleIcon className="h-6 w-6 text-gray-700 ml-2" />
          <input
            type="text"
            placeholder="Search restaurants..."
            value={inputValue}
            onChange={handleInputChange}
            className="bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          {showDropdown && (
            <ul ref={dropdownRef} className="absolute z-10 ml-[2%] top-full w-44 bg-white border border-gray-200 rounded-lg shadow-md  max-h-32 overflow-y-auto">
              {filteredFruits.map(fruit => (
                <li key={fruit} onClick={() => handleFruitClick(fruit)} className="cursor-pointer hover:bg-gray-200 p-1">
                  {fruit}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
          Réserver
        </button>
      </div>
    </div>
  );
};

export default RestaurantReservationForm;
