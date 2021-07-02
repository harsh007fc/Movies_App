import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to='/'>
                        <li clasclassName="nav-item">
                            <a className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        </Link>
                        <Link to='/about'>
                        <li clasclassName="nav-item">
                            <a className="nav-link active" aria-current="page" >About</a>
                        </li>
                        </Link>
                        <Link to='/movies'>
                        <li clasclassName="nav-item">
                            <a className="nav-link active" aria-current="page" >Movies</a>
                        </li>
                        </Link>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
