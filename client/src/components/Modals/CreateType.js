import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import {createType} from "../../services";

const CreateType = () => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => {
            setValue('');
        })
    }

    return (
        <div className="modal fade" id="addType" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Type</h1>
                    </div>
                    <div className="modal-body">
                        <Form>
                            <Form.Control
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder={'Введіть назву типу'}
                            />
                        </Form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={addType}>Add Type</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CreateType};