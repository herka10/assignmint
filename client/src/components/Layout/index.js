import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../utils/auth'


function Layout(props) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto min-vh-100' id='navbar'>
                    <ul>
                        <li>
                            <Link className='nav-link px-2 text-dark' to={'/home'}>
                                <i className='bi-house'></i> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2 text-dark' to={'/todo'}>
                            <i className="bi bi-list-check"></i> <span className='ms-1 d-none d-sm-inline'>To Dos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2 text-dark' to={'/calender'}>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Calendar</span>
                            </Link>
                        </li>
                        {auth.loggedIn()? (
                            <li>
                            <a className='nav-link px-2 text-dark' href='#' onClick={e=> {
                                e.preventDefault()
                                auth.logout()
                            }}>
                            <i className="bi bi-box-arrow-right"></i> <span className='ms-1 d-none d-sm-inline'>Log Out</span>
                            </a>
                        </li>
                        ) : (<li>
                            <Link className='nav-link px-2 text-dark' to={'./'}> 
                            <i className="bi bi-box-arrow-left"></i> <span className='ms-1 d-none d-sm-inline'>Log In</span>
                            </Link>
                        </li>)}
                        

                    </ul>
                </div>
                <div className='col' id='pageRendered'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout;