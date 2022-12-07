import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BrandBar, DeviceList, TypeBar} from "../components";
import {Context} from "../index";
import {fetchBrand, fetchDevice, fetchType} from "../services";

const ShopPage = () => {

    const {device} = useContext(Context);

    useEffect(() => {
        fetchType().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
        fetchDevice().then(data => device.setDevices(data.rows))
    }, [device])
    return (
        <Container className="mt-2">
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export {ShopPage};