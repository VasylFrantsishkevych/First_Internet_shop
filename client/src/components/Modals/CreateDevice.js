import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrand, fetchType} from "../../services";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(() => {

    const {device} = useContext(Context)
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchType().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
    }, [device])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i ))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeID', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then()
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
                                    <Dropdown.Toggle>{device.selectedType.name || 'Choose type'}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            device.types.map(type =>
                                                <Dropdown.Item
                                                    onClick={() => device.setSelectedType(type)}
                                                    key={type.id}
                                                >
                                                    {type.name}
                                                </Dropdown.Item>)
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{device.selectedBrand.name || 'Choose brand'}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {
                                            device.brands.map(brand =>
                                                <Dropdown.Item
                                                    onClick={() => device.setSelectedBrand(brand)}
                                                    key={brand.id}
                                                >
                                                    {brand.name}
                                                </Dropdown.Item>)
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Form.Control
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="mt-3"
                                    placeholder='Введіть назву пристрою'
                                />
                                <Form.Control
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                    className="mt-3"
                                    placeholder='Введіть ціну пристрою'
                                    type="number"
                                />
                                <Form.Control
                                    className="mt-3"
                                    type="file"
                                    onChange={selectFile}
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
                                                    value={i.title}
                                                    onChange={(e) => {changeInfo('title', e.target.value, i.number)}}
                                                    placeholder='Введіть назву властивості'
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <Form.Control
                                                    value={i.description}
                                                    onChange={(e) => {changeInfo('description', e.target.value, i.number)}}
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
                            <button type="button" className="btn btn-primary" onClick={addDevice}>Add Device</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export {CreateDevice};