/*import React from 'react';
import { CalendarIcon, ClockIcon, LocationMarkerIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/outline';

const RestaurantReservationForm = () => {
    return (
        <form className="bg-blue-200 p-4 rounded-lg">
            <h2 className="text-center text-2xl font-bold mb-4">Find your table for any occasion</h2>
            <div className="flex items-center justify-center">
                <input type="date" id="date" name="date" className="flex items-center bg-white p-2 border border-gray-300 rounded mr-2">
                    <CalendarIcon className="h-6 w-6 text-gray-600 mr-2" />
                    Enter date
                    <ChevronDownIcon className="h-6 w-6 text-gray-600 ml-2" />
                </input>
                <input type="time" id="time" name="time" className="flex items-center bg-white p-2 border border-gray-300 rounded mr-2">
                    <ClockIcon className="h-6 w-6 text-gray-600 mr-2" />
                    Enter time
                    <ChevronDownIcon className="h-6 w-6 text-gray-600 ml-2" />
                </input>
                <input className="flex items-center bg-white p-2 border border-gray-300 rounded mr-2">
                    <UserIcon className="h-6 w-6 text-gray-600 mr-2" />
                    Number of people
                    <ChevronDownIcon className="h-6 w-6 text-gray-600 ml-2" />
                </input>
                <input className="flex items-center bg-white p-2 border border-gray-300 rounded mr-2">
                    <LocationMarkerIcon className="h-6 w-6 text-gray-600 mr-2" />
                    Enter location or restaurant
                    <ChevronDownIcon className="h-6 w-6 text-gray-600 ml-2" />
                </input>
                <button className="bg-red-500 text-white px-4 py-2 rounded">Let's go</button>
            </div>
        </form>
    );
}

export default RestaurantReservationForm;*/
import { CalendarIcon, ClockIcon, LocationMarkerIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/outline';
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
    <div className="bg-slate-800 p-10 mb-5">
      <h2 className="text-white  text-center mb-4">
        Qu'attendez-vous ? Trouvez votre table pour toute occasion
      </h2>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <span className="pl-2 text-gray-700">
            <i className="fas fa-calendar-alt"></i>
          </span>
          <input
            type="date" 
            id="date" 
            name="date"
            className="p-2 outline-none"
            placeholder="Apr 8, 2024"
         />
         
        </div>
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <span className="pl-2 text-gray-700">
            <i className="fas fa-clock"></i>
          </span>
          <input type="time" id="time" name="time" className="p-2 outline-none" placeholder="7:00 PM" />
        </div>
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
        <span className="pl-2 text-gray-700">
            <i className="fas fa-user-friends"></i>
          </span>
          
          <select id="personnes" name="personnes" placeholder="2 personnes" className="p-2 outline-none">
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
       
        <div className="flex items-center border-2 border-white bg-white rounded-lg">
          <span className="pl-2 text-gray-700">
            <i className="fas fa-map-marker-alt"></i>
          </span>
      <input
        type="text"
        className="p-2 outline-none"
        placeholder="Location, Restaurant, or Cuisine"
        value={inputValue}
        onChange={handleInputChange}
        />
      <ul className="border border-gray-300 rounded p-2 max-w-xs">
        {filteredFruits.map(fruit => (
          <li key={fruit} onClick={() => handleFruitClick(fruit)} className="cursor-pointer hover:bg-gray-200 p-1">{fruit}</li>
        ))}
      </ul>
      
    </div>
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
          Let's go
        </button>
        
      </div>
    </div>
  );
};

export default RestaurantReservationForm;