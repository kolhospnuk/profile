import React, {useState} from "react";
import useDarkMode from 'use-dark-mode';
import './header.css';
import {Link} from "react-router-dom";


const Header = () => {

    const [name, setName] = useState('Dark');
    const darkMode = useDarkMode(false); // добавляет в боди клас

    const toggleChange = () => {
        console.log(darkMode);
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
