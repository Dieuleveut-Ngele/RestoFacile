import React from 'react';

const Loader = () => {
  return (
    <div className="fixed bottom-0 flex justify-center items-center h-full w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      <span className="ml-3 font-semibold text-gray-900">Chargement en cours...</span>
    </div>

  );
};

export default Loader;
