import React from 'react';
import {Button, Container} from "react-bootstrap";
import {CreateBrand, CreateDevice, CreateType} from "../components";

const AdminPage = () => {
    return (
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-2">
                Додати тип
            </Button>
            <Button variant={"outline-dark"} className="mt-2">
                Додати бренд
            </Button>
            <Button variant={"outline-dark"} className="mt-2">
                Додати пристрій
            </Button>
            <CreateType show={true}/>
            <CreateBrand/>
            <CreateDevice/>
        </Container>
    );
};

export {AdminPage};