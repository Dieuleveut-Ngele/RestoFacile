// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 dark:bg-opacity-80 p-4 text-white">
      <div className="flex justify-between">
        <div className="w-1/3">
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p>Email: contact@restofacile.com</p>
          <p>Téléphone: +1234567890</p>
        </div>
        <div className="w-1/3">
          <h3 className="text-lg font-bold mb-4">À propos de RestoFacile</h3>
          <p>Une application pour trouver et réserver les meilleurs restaurants facilement.</p>
        </div>
        <div className="w-1/3 pl-25">
          <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
          <div className="flex">
            <a href="https://web.facebook.com/home.php" className="mr-2 hover:bg-violet-600 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.twitter.com/restofacile" className="mr-2 hover:bg-violet-400 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/restofacile" className="mr-2 hover:bg-violet-400 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.watshapp.com/restofacile" className="mr-2 hover:bg-violet-400 rounded-full pl-1 pr-1"><FontAwesomeIcon icon={faWhatsapp} /></a>
            
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2022 RestoFacile. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;

/*import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between">
          <div className="footer-top">
            <div className="logo">
              <img src="/restoFacileLogo.png" alt="restoFacile Logo" />
            </div>
            <p className="text-sm">© 2024 restoFacile</p>
          </div>
          <div className="footer-links">
            <ul className="flex space-x-4">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-gray-700">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-gray-700">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-gray-700">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-gray-700">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <p className="text-sm">Follow us on:</p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";
function Footer() {
    return (
        <>
       <div  className="footer static bg-gray-800 text-white fixed bottom-0 w-full">
  <div className="container mx-auto px-4 py-4">
        <div className="flex gap-5 content-center justify-around  bg-gradient-to-r from-gray-600 to-black">
            <div className="flex-col justify-around"> 
            <h4>En savoir plus sur nous</h4>
            <a href="#"><p>Qui sommes nous?</p></a>
            <a href="#"><p>Nous rejoindre</p></a>
            <a href="#"><p>Nos engagements</p></a>
            </div>
            <div> 
            <h4>Quelques informations legales</h4>
            <a href="#"><p>Conditions générales d'utilisation</p></a>
            <a href="#"><p>Référencement et classement des annonces</p></a>
            <a href="#"><p>Conditions générales enregistrer votre restaurant</p></a>
            <a href="#"><p>Vos droits et obligations</p></a>
            </div>
            <div> 
            <h4>Contacts</h4>
            <a href="#"><p>dieuleveutngele@gmail.com</p></a>
            <a href="#"><p>+243824045533</p></a>
            </div>
        </div>
        <footer className="p-4 bg-gray-800 text-white text-center">
      &copy; 2021 RestoFacile. All Rights Reserved.
         </footer>
        </div>
        </div>
        </>
    ) ;
};

export default Footer;*/
