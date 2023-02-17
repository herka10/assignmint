import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Assignmint_celadon.png'


const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
           <div>
            <img src={Logo}/>
            </div>
        </header>
    )
}


export default Header;