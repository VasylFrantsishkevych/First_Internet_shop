import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BrandBar, TypeBar} from "../components";

const ShopPage = () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
        </Container>
    );
};

export {ShopPage};