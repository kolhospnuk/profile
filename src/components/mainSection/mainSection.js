
import React from "react";
import "./mainSection.css";

import Info from "./info/info";
import ImgBlock from "./imgBlock/imgBlock";
import {Col, Row} from "react-bootstrap";

const MainSection = () => {

    return (
        <div className="main">
            <Row>
                <Col  md={7}>
                    <Info/>
                </Col>
                <Col  md={5}>
                    <ImgBlock/>
                </Col>
            </Row>
        </div>
    )
}

export default MainSection;
// openMenu={this.props.openMenu}