import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function SlideBar() {
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto min-vh-100 bg-dark'>
                    <ul>
                        <il>
                            <a className='nav-link px-2'>
                                <i className='bi-house' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </il>
                        <il>
                            <a className='nav-link px-2'>
                                <i className='bi-speedometer' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </il>
                        <il>
                            <a className='nav-link px-2'>
                                <i className='bi-table' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </il>
                        <il>
                            <a className='nav-link px-2'>
                                <i className='bi-heart' /> <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </il>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SlideBar;