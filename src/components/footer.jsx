import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ScrollToTopPage from './ScrollTopPage';

const Footer = () => {
  return (
    <footer className="relative isolate bg-gray-900 p-4 text-white font-serif">
      <div className="flex flex-col md:flex-row items-center justify-between ml-20 py-5">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Coordonnées</h3>
          <p>Adresse : 123 Rue, Ville, Pays</p>
          <p>Téléphone : +1234567890</p>
          <p>Email : contact@entreprise.com</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 ">
          <h3 className="text-lg font-bold mb-2 font-serif">À propos de RestoFacile</h3>
          <p>Une application pour trouver et réserver les meilleurs restaurants facilement.</p>
        </div>
        <div className="w-full md:w-1/3 mb-8 ml-20">
          <h3 className="text-lg font-bold mb-2">Suivez-nous</h3>
          <div className="flex mt-2">
            <a href="https://web.facebook.com/home.php" className="mr-2  hover:bg-blue-700 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.twitter.com/restofacile" className="mr-2 hover:bg-blue-700 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/restofacile" className="mr-2 hover:bg-blue-700 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.watshapp.com/restofacile" className="mr-2 hover:bg-blue-700 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 RestoFacile. Tous droits réservés.</p>
      </div>
      <ScrollToTopPage/>
    </footer>
  );
}

export default Footer;

