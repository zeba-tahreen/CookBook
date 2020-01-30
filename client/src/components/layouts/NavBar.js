import React, { Component } from 'react';

// react styled-components
import style from 'styled-components';
// link router
import { Link } from 'react-router-dom';


class NavBar extends Component {

    render() {
        return (
            <NavbarContainer className = "nav-header">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand  text-white" to="/">CookBook</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span> <i className= "fas fa-bars" style={{color:"#fffff"}}></i> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline ml-5 ">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline my-2 my-sm-0" type="submit">Search</button> */}
                        </form>
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white ml-5 " to="/recipe">Recipe&nbsp;<i className="fas fa-book-open"></i> <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ml-5 " to="/kitchen"> Kitchen&nbsp;<i className="fas fa-concierge-bell"></i> </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle  text-white ml-5" to="#" id="navbarDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Register/Login</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/login">Login</Link>
                                    <Link className="dropdown-item" to="/register">Register</Link>
                                    <Link className="dropdown-item" to="/contact">Contact us</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/">logout</Link>
                                </div>
                            </li>

                        </ul>

                    </div>
                </nav>

            </NavbarContainer>
        )
    }
}

export default NavBar;

const NavbarContainer = style.nav`
.navbar{
    background: rgb(199, 164, 8);
    color: white;

}
.navbar-brand{
    margin-left: 5%;
    font-weight: bold;
    font-size: 28px;
    font-family: 'Liu Jian Mao Cao', cursive;

}

.navbar-toggler:focus{
    outline:none
}
.navbar-toggler {
    border:none;
}
.dropdown-item:hover {
background: rgb(199, 164, 8);
color: white;
}
`