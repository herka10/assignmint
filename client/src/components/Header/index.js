import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../images/Assignmint_celadon.png'
import Auth from '../../utils/auth'


const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
           <div>
            <img id='logo' src={Logo}/>
            </div>
        </header>
    )
}


export default Header;