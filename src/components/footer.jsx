
import React from "react";
function Footer() {
    return (
        <>
       <div  className="footer bg-gray-800 text-white fixed bottom-0 w-full">
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

export default Footer;
