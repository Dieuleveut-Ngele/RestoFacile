import React, { useState } from 'react';

const AddRestaurant = ({ handleGoBack }) => {
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

    const response = await fetch('/restaurants', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const newRestaurant = await response.json();
      setAddedRestaurant(newRestaurant);
    } else {
      // Gérer les erreurs
    };
 

  return (
  <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xltracking-tight text-gray-900 sm:text-4xl">
          Inscrire votre restaurant</h2>
      </div>
    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
     <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
           <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Nom du restaurant
           </label>
      <div className="mt-2.5">
      <input
        type="text"
        placeholder="Nom du restaurant"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      </div>
    </div>
    <div className="sm:col-span-2">
           <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Ville
           </label>
      <div className="mt-2.5">
      <input
        type="text"
        placeholder="Ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      </div>
      </div>
      <div className="sm:col-span-2">
           <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Télécharger l'image
           </label>
      <div className="mt-2.5">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      </div>
      </div>
      <input
        type="text"
        placeholder="Disponibilité"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
     
      <input
        type="text"
        placeholder="Prix"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <div className="flex items-center">
      <button type="button" onClick={handleGoBack} 
      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Retour 
          </button>
      </div>
       <div className="flex items-center">
          <button type="button" onClick={handleRegister} 
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Enregistrer</button>
        </div>
      </div>
    </form>
    {addedRestaurant && (
        <div>
          <h2>Restaurant ajouté :</h2>
          <p>Nom : {addedRestaurant.name}</p>
          <p>Ville : {addedRestaurant.city}</p>
          <p>Disponibilité : {addedRestaurant.availability}</p>
          <p>Prix : {addedRestaurant.price}</p>
          <img src={addedRestaurant.image} alt={addedRestaurant.name} />
        </div>
      )}
</div>
  );
 };
};

export default AddRestaurant;

