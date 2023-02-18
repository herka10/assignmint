import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'


function Layout(props) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto min-vh-100' id='navbar'>
                    <ul>
                        <li>
                            <Link className='nav-link px-2 text-dark' to={'/'}>
                                <i className='bi-house'></i> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2 text-dark' to={'/todo'}>
                            <i class="bi bi-list-check"></i> <span className='ms-1 d-none d-sm-inline'>To Dos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2 text-dark' to={'/calender'}>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Calendar</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2 text-dark' to={'/signin'}>
                            <i class="bi bi-box-arrow-right"></i> <span className='ms-1 d-none d-sm-inline'>Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout;