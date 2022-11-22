import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils";

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink style={{color: 'gray'}} to={SHOP_ROUTE}>SHOP Device</NavLink>
                <Nav className="ml-auto">

                </Nav>
            </Container>
        </Navbar>
    );
};

export {Header};