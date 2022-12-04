import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = () => {

    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <div>
            <div className="modal fade" id="addDevice" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Device</h1>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            device.types.map(type =>
                                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            device.brands.map(brand =>
                                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Form.Control
                                    className="mt-3"
                                    placeholder='Введіть назву пристрою'
                                />
                                <Form.Control
                                    className="mt-3"
                                    placeholder='Введіть ціну пристрою'
                                    type="number"
                                />
                                <Form.Control
                                    className="mt-3"
                                    type="file"
                                />
                                <hr/>
                                <Button
                                    variant={"outline-dark"}
                                    onClick={addInfo}
                                >
                                    Add new properties
                                </Button>
                                {
                                    info.map(i =>
                                        <Row className="mt-4" key={i.number}>
                                            <Col md={4}>
                                                <Form.Control
                                                    placeholder='Введіть назву властивості'
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <Form.Control
                                                    placeholder='Введіть опис властивості'
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <Button
                                                    variant={"outline-danger"}
                                                    onClick={() => removeInfo(i.number)}
                                                >
                                                    Delete
                                                </Button>
                                            </Col>
                                        </Row>)
                                }
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add Device</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CreateDevice};