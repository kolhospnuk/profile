
import React, {Component} from 'react';
import "./app.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from "react-bootstrap";

import Footer from "../footer/footer";
import SideBar from "../sideBar/sideBar";
import Header from "../header/header";
import MainSection from "../mainSection/mainSection";
import NumberFacts from "../mainSection/numberFacts/numberFacts";
import Context from "../context/context";

export default class App extends Component {

    state = {
        menuState: false,
    }

    // error: false

    // componentDidCatch(error, errorInfo) {
    //     this.setState({
    //         error: true
    //     })
    // }

    openMenu = () => {
        this.setState((state) => {
           return {
               menuState: !state.menuState
           }
        })
    };

    render() {

        // if (this.state.error) {
        //     return <Error/>;
        // }

        return (
            <Context.Provider value={this.openMenu}>
                <Router>
                    <Header/>
                    <SideBar menuState={this.state.menuState}/>
                    <Container>
                        <MainSection/>
                        <NumberFacts/>
                    </Container>
                    <Footer/>
                </Router>
            </Context.Provider>
        )
    }
}

// for small mobile css