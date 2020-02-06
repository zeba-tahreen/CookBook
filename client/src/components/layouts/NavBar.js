import React, { Component } from 'react';
import PropTypes from "prop-types";
import style from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from "../../actions/authActions";

class NavBar extends Component {

    logout = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { isAuthenticated } = this.props.auth;

        const userLinks = (
            <ul>
                <ListGroupItem >
                    <a className="nav-item ml-5" href="/recipe">Recipe&nbsp;<i className="fas fa-book-open"></i></a>
                </ListGroupItem>
                <ListGroupItem >
                    <a className="nav-item ml-5" href="/kitchen">Kitchen&nbsp;<i className="fas fa-concierge-bell"></i></a>
                </ListGroupItem>
                <ListGroupItem >
                    <a className="nav-item ml-5" href="/logout" onClick={this.logout.bind(this)}>Logout</a>
                </ListGroupItem>
            </ul>
        );

        const guestLinks = (
            <ul>
                <ListGroupItem >
                    <a className="nav-item ml-5" href="/recipe">Recipe&nbsp;<i className="fas fa-book-open"></i></a>
                </ListGroupItem>
                <ListGroupItem >
                    <a className="nav-item ml-5" href="/login">Login</a>
                </ListGroupItem>
                <ListGroupItem >
                    <a className="nav-item ml-5" href="/register">Register</a>
                </ListGroupItem>
            </ul>

        );
        return (
            <NavbarContainer className="nav-header">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand  text-white" to="/">CookBook</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span> <i className="fas fa-bars" style={{ color: "#fffff" }}></i> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline ml-5 ">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul className="navbar-nav m-auto">
                            {isAuthenticated ? userLinks : guestLinks}
                        </ul>

                    </div>
                </nav>

            </NavbarContainer>
        )
    }
}
NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(
    mapStateToProps,
    { logoutUser }
)(NavBar);

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

`

const ListGroupItem = style.div`
   background:none;
   border:none;
   display:inline;

   && :hover{
       text-decoration:none;
   }

   .nav-item{
       color:white;
   }
`