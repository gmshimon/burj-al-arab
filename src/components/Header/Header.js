import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useFirebase from '../../Hooks/UseFirebase';

const Header = () => {
    const {user, logOut} = useFirebase();

    const handleLogout = () => {
        logOut();
    }



    return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`}} className="header">
            <div className="nav-container">
                <nav className="nav">
                    <ul>
                        <li>
                            <img className="logo" src={logo} alt="" />
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="btn-book" to="/book">Book</Link>
                        </li>
                        <li>
                            {
                                user.email ? <span style={{color: 'white'}}>
                                    {user.displayName} <button onClick={handleLogout}>log out</button>
                                </span>
                                    :
                                    <Link to="/login">Login</Link>

                            }
                        </li>

                    </ul>
                </nav>
            </div>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;