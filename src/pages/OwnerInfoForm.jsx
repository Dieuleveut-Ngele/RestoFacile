import React from 'react';

const OwnerInfoForm = ({ ownerInfo, handleOwnerInfoChange, handleNext }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Owner Information</h2>
      <form className="grid grid-cols-1 gap-4">
        <label htmlFor="firstName" className="text-lg">First Name</label>
        <input type="text" id="firstName" name="firstName" value={ownerInfo.firstName} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="lastName" className="text-lg">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={ownerInfo.lastName} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="email" className="text-lg">Email</label>
        <input type="email" id="email" name="email" value={ownerInfo.email} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="phoneNumber" className="text-lg">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={ownerInfo.phoneNumber} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <button type="button" onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Next</button>
      </form>
    </div>
  );
};

export default OwnerInfoForm;