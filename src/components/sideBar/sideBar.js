import React, {Component} from "react";
import './sideBar.css';
import Context from "../../context/context";
import {Link} from "react-router-dom";

export default class SideBar extends Component {

    render() {

        let classSidebar = "sidebar";

        /* Class 'active' change property of sidebar */
        if (this.props.menuState) {
            classSidebar = classSidebar + ' active';
        }

        /* Use context to get value property openMenu*/
        return (
            <Context.Consumer>
                {openMenu => (
                    <div className={classSidebar}>
                        <div className="sidebar-cross"
                             onClick={openMenu}>
                            <span/>
                            <span/>
                        </div>
                        <ul className="sidebar-list"
                            onClick={openMenu}>
                            <li className="sidebar-list-item">
                                <Link to="/aboutme">About me</Link>
                            </li>
                            <li className="sidebar-list-item">
                                <Link to="/education">Education</Link>
                            </li>
                            <li className="sidebar-list-item">
                                <Link to="/skills">Skills</Link>
                            </li>
                            <li className="sidebar-list-item">
                                <Link to="/randomThings">Random things</Link>
                            </li>
                            <li className="sidebar-list-item">
                                <Link to="/contacts">Contacts</Link>
                            </li>
                            <li className="sidebar-list-item">
                                <a href="https://www.instagram.com/antokhamomot"
                                   target="_blank">
                                    My life
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

