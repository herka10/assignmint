import React from "react";
import Upcoming from "../components/Upcoming";

import Calendar from "./Calendar"

const Home = () => {
    return (
        <main>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Calendar/>
            </div>
        </main>
    );
};

export default Home;