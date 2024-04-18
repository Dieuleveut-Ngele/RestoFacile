import React from "react";
import Main from "../components/main"
import HeroSection from "../components/heroSection";
import RestaurantReservationForm from "./RestaurantReservationForm";
import Newsletter from "../components/newsletter";


 function HomePage() {
    return (
        <> 
        <HeroSection/>  
        <RestaurantReservationForm/> 
        <Main/>  
        < Newsletter/>            
        </>
    );
    
}

export default HomePage;





