import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {createBrand} from "../../services";

const CreateBrand = () => {
    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('');
        })
    }
    return (
        <div>
            <div className="modal fade" id="addBrand" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Brand</h1>
                        </div>
                        <div className="modal-body">
                            <Form>
                                <Form.Control
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    placeholder={'Введіть назву бренду'}
                                />
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={addBrand}>Add Brand</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CreateBrand};