import React from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import myEventsList from '../utils/placeholderEvents'


//import SignUp from "../components/SignUp";
// import Calendar from "./Calendar"
import auth from '../utils/auth'
import { Navigate } from 'react-router-dom'

const localizer = momentLocalizer(moment)

const Home = () => {

    const isAuthenticated = auth.loggedIn()
    if (!isAuthenticated) {
      return <Navigate to='/' />
    }

    return (
        <div className="animate__animated animate__zoomIn"
            style={{
                display: "block",
            }}
        >
            <h1>Welcome!</h1>
            <div className="myCustomHeight">
                <Calendar
                localizer={localizer}
                events={myEventsList}
                defaultView="month"
                startAccessor="start"
                endAccessor="end"
                draggableAccessor={(event) => true}
                showMultiDayTimes
                step={60}
                />
            </div>
            <upcoming />
        </div>
    );
};

export default Home;