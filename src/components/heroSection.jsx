import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroSection = () => {
  return (
    <section className="text-white text-center py-0 font-bold">
      <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay>
      <div className="bg-cover bg-center bg-opacity-90 bg-black bg-center h-screen flex items-center justify-center" style={{backgroundImage: "url('https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg')"}}>
          <h1 className="text-2xl md:text-4xl">Réservez une table dès aujourd'hui.</h1>
        </div>
        
        <div className="bg-cover bg-center bg-opacity-90 bg-center bg-opacity-75 h-screen flex items-center justify-center" style={{backgroundImage: "url('https://media.istockphoto.com/id/1361899698/fr/photo/ensemble-de-couverts-dor%C3%A9s-avec-assiette-sombre.jpg?s=1024x1024&w=is&k=20&c=4Wko0sdm5XVEWz21rEuZgH9EY1LKvPHMJWAM2sJdjZQ=')"}}>
          <h1 className="text-2xl md:text-4xl">Créez des souvenirs inoubliables. Laissez-nous vous guider vers une expérience gastronomique sur mesure.</h1>
        </div>
        <div className="bg-cover bg-center bg-opacity-50 h-screen flex items-center justify-center" style={{backgroundImage: "url('https://img.freepik.com/photos-gratuite/burger-explosif-legumes-fromage-fondu-fond-noir-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.2.783867296.1693781121&semt=sph')"}}>
          <h1 className="text-2xl md:text-4xl bg-opacity-50">Créez des souvenirs inoubliables. Laissez-nous vous guider vers une expérience gastronomique sur mesure.</h1>
        </div>
      </Carousel>
    </section>
  );
}

export default HeroSection;

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
