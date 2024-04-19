/*import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-cover bg-center text-white text-center py-20" style={{backgroundImage: "url('https://galleria.co.ke/storage/2022/05/Web-banner-mbuzi-munch-1-1-1200x600.jpg')"}}>
      <h1 className="text-4xl mb-8">Trouvez votre bonheur, à table ! Plus qu'une table, une expérience.</h1>
      <form id="reservation-form" className="inline-block">
        <input type="date" id="date" name="date" className="mr-2 p-2 border border-gray-300 rounded" />
        <input type="time" id="time" name="time" className="mr-2 p-2 border border-gray-300 rounded" />
        <select id="personnes" name="personnes" className="mr-2 p-2 border border-gray-300 rounded">
          <option value="1">1 personne</option>
          {/* Ajouter des options pour plus de personnes }
        </select>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Réservez</button>
      </form>
    </section>
  );
}

export default HeroSection;*/
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CalendarIcon, ClockIcon, LocationMarkerIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/outline';

const HeroSection = () => {
  return (
    <section className="text-white text-center py-0">
      <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay>
        <div className="bg-cover bg-center bg-opacity-90 bg-center bg-opacity-75 h-screen flex items-center justify-cente" style={{backgroundImage: "url('https://galleria.co.ke/storage/2022/05/Web-banner-mbuzi-munch-1-1-1200x600.jpg')"}}>
          <h1 className="text-4xl">Créez des souvenirs inoubliables
          Laissez-nous vous guider vers une expérience gastronomique sur mesure</h1>
        </div>
        <div className="bg-cover bg-center bg-opacity-90 bg-center bg-opacity-75 h-screen flex items-center justify-center" style={{backgroundImage: "url('https://galleria.co.ke/storage/2022/05/Web-square-Mbuzi-Munch-4.jpg')"}}>
          <h1 className="text-4xl">Une expérience culinaire inoubliable, 
          Détendez-vous et laissez-vous charmer : Vivez une expérience culinaire dans un cadre exceptionnel</h1>
        </div>
        <div className="bg-cover bg-center bg-opacity-90 bg-black bg-center h-screen flex items-center justify-center" style={{backgroundImage: "url('https://galleria.co.ke/storage/2022/04/DSC_8765.jpg')"}}>
          <h1 className="text-4xl">Réservez une table dès aujourd'hui</h1>
        </div>
      </Carousel>
      
    </section>
  );
}

export default HeroSection;