import React, {Component} from "react";
import './sideBar.css';
import Context from "../context/context";
import {Link} from "react-router-dom";

export default class SideBar extends Component {


    render() {

        const {menuState} = this.props;
        let classSidebar = "sidebar";

        if (menuState) {
            classSidebar = classSidebar + ' active';
        }

        return (
            <div className={classSidebar}>
                <div className="sidebar-cross"
                     onClick={this.context}>
                    <span/>
                    <span/>
                </div>
                <ul className="sidebar-list"
                    onClick={this.context}>
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
        )
    }
}

SideBar.contextType = Context;
