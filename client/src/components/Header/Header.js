import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    const {user} = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>SHOP Device</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Адміністратор</Button>
                        <Button variant={"outline-light"} className="ms-2">Ввійти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Зареєструватися</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export {Header};