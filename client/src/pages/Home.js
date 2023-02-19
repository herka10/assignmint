import React from "react";
// import Navbar from "../components/Navbar";
import Upcoming from "../components/Upcoming";
// import ToDo from "../components/ToDo";
// import FamilyList from "../components/FamilyList"

//import SignUp from "../components/SignUp";
import Calendar from "./Calendar"

const Home = () => {
    return (
        <div
        style={{
            display: "flex",
            
        }}
        > 
            <Calendar/>
                <upcoming />
            </div>
    );
};

export default Home;