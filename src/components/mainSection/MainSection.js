
import React from "react";
import {Col, Row} from "react-bootstrap";
import "./mainSection.css";

import Info from "./info/info";
import ImgBlock from "./imgBlock/imgBlock";


/* Use bootstrap for build main section*/
export default () => {
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