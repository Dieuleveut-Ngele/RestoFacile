import React, { useState } from 'react';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew'];

const FilterReservation = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="text"
        className="border border-gray-300 rounded p-2 mb-4"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul className="border border-gray-300 rounded p-2 max-w-xs">
        {filteredFruits.map(fruit => (
          <li key={fruit} onClick={() => handleFruitClick(fruit)} className="cursor-pointer hover:bg-gray-200 p-1">{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterReservation;