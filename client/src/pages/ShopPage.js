import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BrandBar, DeviceList, PaginationPage, TypeBar} from "../components";
import {Context} from "../index";
import {fetchBrand, fetchDevice, fetchType} from "../services";

const ShopPage = () => {

    const {device} = useContext(Context);

    useEffect(() => {
        fetchType().then(data => device.setTypes(data))
        fetchBrand().then(data => device.setBrands(data))
        fetchDevice(null, null, 1, 10).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device])

    useEffect(() => {
        fetchDevice(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand])

    return (
        <Container className="mt-2">
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <PaginationPage/>
                </Col>
            </Row>
        </Container>
    );
};

export {ShopPage};