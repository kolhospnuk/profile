
import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from "react-bootstrap";

import "./app.css";

import Footer from "../footer/Footer";
import Header from "../header/header";
import MainSection from "../mainSection/MainSection";
import CocktailRecipes from "../mainSection/cocktailRecipes/cocktailRecipes";
import Context from "../context/context";
import SideBar from "../sideBar/sideBar";

/* Create the main component of our app */
export default class App extends Component {

    /**
     * "MenuState" may have two values, if the menu is hidden value is false,
     * visible value is true. Default it's false
     *
     * @type {{menuState: boolean}}
     */
    state = {
        menuState: false,
    }

    /* Function changes value of "menuState" */
    openMenu = () => {
        this.setState((state) => {
           return {
               menuState: !state.menuState
           }
        })
    };


    /**
     * Render components.
     * Use Context wrapper to pass the value inside components.
     * Use Router wrapper for routing.
     * Pass the state to the Sidebar component
     */
    render() {
        return (
            <Context.Provider value={this.openMenu}>
                <Router>
                    <Header/>
                    <SideBar menuState={this.state.menuState}/>
                    <Container>
                        <MainSection/>
                        <CocktailRecipes/>
                    </Container>
                    <Footer/>
                </Router>
            </Context.Provider>
        )
    }
}