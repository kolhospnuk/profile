
import React, {Component} from "react";
import {Route} from 'react-router-dom';
import "./info.css";

import AboutMe from "./pages/aboutMe/AboutMe";
import Education from "./pages/education/education";
import Contact from "./pages/contact/contact";
import Start from "./pages/start/start";
import Skills from "./pages/skills/skills";
import RandomThings from "./pages/randomThings/randomThings";

export default class Info extends Component {

    render() {
        return (
            <div className="info">
                <Route path="/" exact component={Start}/>
                <Route path="/aboutMe" component={AboutMe}/>
                <Route path="/education" component={Education}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/randomThings" component={RandomThings}/>
                <Route path="/contacts" component={Contact}/>
            </div>
        )
    }
}