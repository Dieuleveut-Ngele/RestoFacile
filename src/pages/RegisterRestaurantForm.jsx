import React, { useState } from 'react';
import OwnerInfoForm from './OwnerInfoForm';
import RestaurantInfoForm from './RestaurantInfoForm';

const RegisterRestaurantForm = () => {
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
