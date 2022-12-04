import React from 'react';
import {Button, Form} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
    return (
        // <div className="modal-dialog modal-dialog-centered">
        //     <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Type</h1>
        //     <div className="modal-body">
        //         <Form>
        //             <Form.Control
        //                 placeholder={'Введіть назву типу'}
        //             />
        //         </Form>
        //     </div>
        //     <div className="modal-footer">
        //         <Button variant="outline-danger" onClick={onHide}>Close</Button>
        //         <Button variant="outline-success" onClick={onHide}>Add</Button>
        //     </div>
        // </div>
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {CreateType};