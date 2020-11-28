import React, {useState} from "react";
import useDarkMode from 'use-dark-mode';
import './header.css';
import {Link} from "react-router-dom";

/* App main header */
const Header = () => {

    /* Hook useState change button name, 'Dark' or 'Light' */
    const [name, setName] = useState('Dark');

    /* Hook useDarkMode toggling a CSS class, add to element body
     * class 'light-mode' or 'dark-mode'. Default state - false, it's - 'light-mode'
     */
    const darkMode = useDarkMode(false);

    /* Function toggle themes and name button */
    const toggleChange = () => {
        darkMode.toggle();
        name === 'Dark' ? setName('Light') : setName('Dark');
    }

    return (
        <div className='header'>
            <div className="header-line"/>
            <div className="container">
                <div className="header-content">
                    <div className="header-content-name">
                        <h1>Anton Momot</h1>
                        <h2>React Developer</h2>
                    </div>
                    <button type='button'
                            className="header-content-btn"
                            onClick={toggleChange}
                    >
                        {name}
                    </button>
                    <ul className="header-content-list">
                        <li className="header-content-list-item">
                            <Link to="/aboutme">About me</Link>
                        </li>
                        <li className="header-content-list-item">
                            <Link to="/education">Education</Link>
                        </li>
                        <li className="header-content-list-item">
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li className="header-content-list-item">
                            <Link to="/randomThings">Random things</Link>
                        </li>
                        <li className="header-content-list-item">
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
