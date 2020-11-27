
import React, {Component} from "react";
import {Route} from 'react-router-dom';
import "./info.css";

import AboutMe from "./pages/aboutMe/AboutMe";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";
import Start from "./pages/start/startPage";
import Skills from "./pages/skills/Skills";
import RandomThings from "./pages/randomThings/RandomThings";

export default class Info extends Component {

    render() {
        return (
            <div className="info">
                <Route path="/profile" exact component={Start}/>
                <Route path="/aboutMe" component={AboutMe}/>
                <Route path="/education" component={Education}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/randomThings" component={RandomThings}/>
                <Route path="/contacts" component={Contact}/>
            </div>
        )
    }
}