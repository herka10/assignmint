import React from "react";
import { Link } from 'react-router-dom';
// import Nav from '../Navbar'
import Logo from '../../images/Assignmint_celadon'

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    if (false) {
        return (
            <header>
                <div>
                    <img src={Logo}/>
                </div>
            </header>
        )
    }
    return (
        <header>
           <div>
            <img src={Logo}/>
            {/* <Nav> </Nav> */}
            </div>
        </header>
    )
}


export default Header;