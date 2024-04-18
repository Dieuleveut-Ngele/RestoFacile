import React from "react";
import Main from "../components/main"
import HeroSection from "../components/heroSection";
import RestaurantReservationForm from "./RestaurantReservationForm";


 function HomePage() {
    return (
        <> 
        <HeroSection/>  
        <RestaurantReservationForm/> 
        <Main/>              
        </>
    );
    
}

export default HomePage;





