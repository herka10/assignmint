import React from 'react'
import { Link } from 'react-router-dom'

function Layout(props) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto min-vh-100 bg-dark'>
                    <ul>
                        <li>
                            <Link className='nav-link px-2' to={'/'}>
                                <i className='bi-house' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2' to={'/todo'}>
                                <i className='bi-speedometer' /> <span className='ms-1 d-none d-sm-inline'>To Dos</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2' to={'/calender'}>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Calendar</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='nav-link px-2' to={'/signin'}>
                                <i className='bi-heart' /> <span className='ms-1 d-none d-sm-inline'>Signin</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    {props.children}
                </div>
            </div>
        </div>
        // <div className='left nav flex-sm-column' id='sidebar'>
            
            
        //     <Link className='ms-1 d-none d-sm-inline' to={'/'} style={{ textDecoration: 'none' }}> <i className='bi-house' />Home</Link>
            
        //     <a className='nav-link px-2'>
        //         <i className='bi-speedometer' /> <Link className='ms-1 d-none d-sm-inline' to={'/list'} style={{ textDecoration: 'none' }}>To-Do's</Link>
        //     </a>
        //     <a className='nav-link px-2'>
        //         <i className='bi-table' /> <Link className='ms-1 d-none d-sm-inline' to={'/calendar'} style={{ textDecoration: 'none' }}>Calendar</Link>
        //     </a>
        //     <a className='nav-link px-2'>
        //         <i className='bi-heart' /> <Link className='ms-1 d-none d-sm-inline' to={'/signin'} style={{ textDecoration: 'none' }}>Groups</Link>
        //     </a>
        // </div>
    )
}

export default Layout;