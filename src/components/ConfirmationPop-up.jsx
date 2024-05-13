import React from 'react';

const ConfirmationPopup = ({ showPopup, setShowPopup }) => {
  return (
    showPopup && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 opacity-90 flex items-center justify-center">
        <div className="bg-black p-8 rounded-lg">
          <h2 className="text-center text-2xl mb-4 font-Georgia text-white">Confirmation de réservation</h2>
          <p className="text-white mb-4">Votre réservation a été confirmée. Un email de confirmation vous sera envoyé.</p>
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg" onClick={() => setShowPopup(false)}>
            Fermer
          </button>
        </div>
      </div>
    )
  );
};

export default ConfirmationPopup;