import React from 'react';
import ScrollToTopPage from './ScrollTopPage';

const Main = () => {
  return (
    
        <div className="flex">
          <div className="flex-1 bg-dark-green-500 p-8">
            <div className="text-black">
              <p className="text-xl font-bold mb-4">RestoFacile</p>
              <p className="mb-4">Évitez les incertitudes</p>
              <p className="mb-4">Trouvez des restaurants que vous adorerez,,</p>
              <p className="mb-4">quelle que soit votre humeur...</p>
              <button className="bg-white text-dark-green-500 px-4 py-2 rounded-full font-bold">
                RESERVER
              </button>
            </div>
          </div>
          <div className="flex-1">
            {/* Insérez ici l'image du restaurant */}
          </div>
          <ScrollToTopPage/>
        </div>   
      );
    };
    
 
export default Main;
