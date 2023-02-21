import React from "react";
import ListForm from '../components/ListForm'
import List from '../components/List'


//import SignUp from "../components/SignUp";
import Calendar from "./Calendar"
import auth from '../utils/auth'
import { Navigate } from 'react-router-dom'

const Home = () => {

    const isAuthenticated = auth.loggedIn()
    if (!isAuthenticated) {
      return <Navigate to='/' />
    }

    return (
        <div
            style={{
                display: "block",
            }}
        >
            <h1>Welcome!</h1>
            <Calendar />
            <upcoming />
        </div>
    );
};

export default Home;