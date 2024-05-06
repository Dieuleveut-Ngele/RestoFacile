import React from "react";
import HeroSection from "../components/heroSection";
import RestaurantReservationForm from "./RestaurantReservationForm";
import Newsletter from "../components/newsletter";
import Restaurant from "../components/restaurant";
import "../App.css"
//import { Outlet } from "react-router-dom";


 function HomePage() {
    return (
        <> 
        <HeroSection/>  
        <RestaurantReservationForm/> 
        <Restaurant/>
        {/* <Main/>  */}
        <Newsletter/>            
        </>
    );   
}

export default HomePage;






