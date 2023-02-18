import React from 'react'

function SideBar() {
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto min-vh-100 bg-dark'>
                    <ul>
                        <li>
                            <a className='nav-link px-2'>
                                <i className='bi-house' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2'>
                                <i className='bi-speedometer' /> <span className='ms-1 d-none d-sm-inline'>Today's Tasks</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2'>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a className='nav-link px-2'>
                                <i className='bi-heart' /> <span className='ms-1 d-none d-sm-inline'>Fitness</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col'>
                    <h2>MINT</h2>
                </div>
            </div>
        </div>
    )
}

export default SideBar;