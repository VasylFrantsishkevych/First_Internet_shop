import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils";
import {login, registration} from "../services";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const AuthPage = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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
                        <Button variant={"outline-success"} onClick={click}>
                            {
                                isLogin ? 'Вхід' : 'Зареєструватися'
                            }
                        </Button>
                    </Row>
                </Form>

            </Card>
        </Container>
    );
});

export {AuthPage};