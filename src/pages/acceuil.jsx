import React from "react";
import Main from "../components/main"
import HeroSection from "../components/heroSection";
import RestaurantReservationForm from "./RestaurantReservationForm";
import Newsletter from "../components/newsletter";
import Restaurant from "../components/restaurant";


 function HomePage() {
    return (
        <> 
        <HeroSection/>  
        <RestaurantReservationForm/> 
        <Restaurant/>
        <Main/>  
        <Newsletter/>            
        </>
    );
    
}

export default HomePage;





