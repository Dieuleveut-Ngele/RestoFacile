import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const RestaurantInfoForm = ({ restaurantInfo, handleRestaurantInfoChange, handleRegister, handleGoBack }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Restaurant Information</h2>
      <form className="grid grid-cols-1 gap-4">
        <label htmlFor="name" className="text-lg">Restaurant Name</label>
        <input type="text" id="name" name="name" value={restaurantInfo.name} onChange={handleRestaurantInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="address" className="text-lg">Address</label>
        <input type="text" id="address" name="address" value={restaurantInfo.address} onChange={handleRestaurantInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="cuisineType" className="text-lg">Cuisine Type</label>
        <input type="text" id="cuisineType" name="cuisineType" value={restaurantInfo.cuisineType} onChange={handleRestaurantInfoChange} className="p-2 rounded-md border border-gray-300" />

        <div className="flex items-center">
          <button type="button" onClick={handleGoBack} className="flex items-center text-gray-600 hover:text-gray-800">
            <FaArrowLeft className="mr-2" />
            Go Back
          </button>
          <button type="button" onClick={handleRegister} className="bg-blue-500 text-white py-2 px-4 rounded-md ml-4 hover:bg-blue-600">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RestaurantInfoForm;