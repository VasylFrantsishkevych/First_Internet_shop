import React from 'react';
import {Button, Container} from "react-bootstrap";
import {CreateBrand, CreateDevice, CreateType} from "../components";

const AdminPage = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"}
                className="mt-2"
                data-bs-toggle={"modal"}
                data-bs-target="#addType"
            >
                Додати тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-2"
                data-bs-toggle={"modal"}
                data-bs-target="#addBrand"
            >
                Додати бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-2"
                data-bs-toggle={"modal"}
                data-bs-target="#addDevice"
            >
                Додати пристрій
            </Button>
            <CreateType/>
            <CreateBrand/>
            <CreateDevice/>
        </Container>
    );
};

export {AdminPage};