import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {
        id: 8,
        name: 'Apple',
        price: 25000,
        rating: 5,
        img: 'data:image/jpeg;base64,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'
    }
    const description = [
        {id: 1, title: 'Оперативна память', description: '5 гб'},
        {id: 2, title: 'Камера', description: '12 мп'},
        {id: 3, title: 'Процесор', description: 'Пентіум 3'},
        {id: 4, title: 'Кількість ядер', description: '2'},
        {id: 5, title: 'Батарея', description: '4000'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: "cover",
                                fontSize: 64
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Додати в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {
                    description.map((info,index) =>
                        <div key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                            {info.title}: {info.description}
                        </div>
                    )
                }
            </Row>
        </Container>
    );
};

export {
    DevicePage
};