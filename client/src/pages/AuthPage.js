import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils";

const AuthPage = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть пароль..."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Незареєстрований? <NavLink to={REGISTRATION_ROUTE}>Зареєструватися!</NavLink>
                            </div>
                            :
                            <div>
                                Зареєстрований? <NavLink to={LOGIN_ROUTE}>Ввійти!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"}>
                            {
                                isLogin ? 'Вхід' : 'Зареєструватися'
                            }
                        </Button>
                    </Row>
                </Form>

            </Card>
        </Container>
    );
};

export {AuthPage};