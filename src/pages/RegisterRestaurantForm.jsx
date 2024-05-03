import React, { useState } from 'react';
import OwnerInfoForm from './OwnerInfoForm';
import RestaurantInfoForm from './RestaurantInfoForm';

const RegisterRestaurantForm = () => {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [availability, setAvailability] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('city', city);
    formData.append('availability', availability);
    formData.append('price', price);
    formData.append('image', image);

    const response = await fetch('http://localhost:3000/restaurants', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const newRestaurant = await response.json();
      setAddedRestaurant(newRestaurant);
    } else {
      // Gérer les erreurs
    };
  };

  
  const [showOwnerForm, setShowOwnerForm] = useState(true);
  const [ownerInfo, setOwnerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [restaurantInfo, setRestaurantInfo] = useState({
    name: '',
    address: '',
    cuisineType: ''
  });

  const handleOwnerInfoChange = (e) => {
    setOwnerInfo({
      ...ownerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleRestaurantInfoChange = (e) => {
    setRestaurantInfo({
      ...restaurantInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setShowOwnerForm(false);
  };

  const handleRegister = () => {
    console.log('Owner Info:', ownerInfo);
    console.log('Restaurant Info:', restaurantInfo);
  };

  const handleGoBack = () => {
    setShowOwnerForm(true);
  };

  return (
    <div className="container mx-auto py-8">
      {showOwnerForm ? (
        <OwnerInfoForm ownerInfo={ownerInfo} handleOwnerInfoChange={handleOwnerInfoChange} handleNext={handleNext} />
        
      ) : (
        <RestaurantInfoForm restaurantInfo={restaurantInfo} handleRestaurantInfoChange={handleRestaurantInfoChange} handleRegister={handleRegister} handleGoBack={handleGoBack} />
      )
      }
    </div>
  );
};

export default RegisterRestaurantForm;
