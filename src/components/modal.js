import React, {useState} from 'react';
import {Button, ModalHeader, ModalBody, Modal, ModalFooter} from 'reactstrap';
import { Col, Container, Label, Row } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

const ModalComponent = (props) => {

    
    
    const [show,setShow] = useState(false)

    const toggleModal = () => setShow(!show)
    
    const required = val => val && val.length;
    const maxLength = len => val => !val || (val.length <= len);
    const minLength = len => val => val && (val.length >= len);
    const isNumber = val => !isNaN(+val);
    const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    const validPassword = val => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/

    
    return (
        <div>
            <Button className="bg-transparent" onClick={toggleModal}>
                Login
            </Button>
            <Modal
            isOpen={show}
            toggle={toggleModal}
            className="curvy "
             >
                
                <ModalBody className=" bgcolorcontact portcolor curvy">
                        <LocalForm className="bgcolorcontact portcolor formy">
                            <h1 className="text-center">
                                Log In
                            </h1>
                            
                            
                            <Row className="form-group">
                                <Label htmlFor="email"  className="text-center spacer" >Email</Label>
                                <Col />
                                <Col className="col-4 center" xs={6} lg={4}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control" validators={{required, validEmail}} />
                                    <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                </Col>

                                <Col />
                            </Row>
                            <Row className="form-group ">
                                <Label htmlFor="password"  className="text-center spacer " >
                                    Password
                                </Label>
                                <Col />
                                <Col className="col-4 center " xs={6} lg={4}>
                                    <Control.text model=".password" id="password" name="password" placeholder="Password" className="form-control" validators={{required, validPassword}} />
                                    <Errors
                                            className="text-danger"
                                            model=".password"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Invalid Password',
                                                validPassword: 'Invalid Password'
                                            }}
                                        />
                                </Col>
                                <Col />
                            </Row>
                            <Row >
                                

                                <Col className="center spacer">
                                    <Button className="btn btn-lg bg-muted text-white btn-outline-muted" onClick={toggleModal} xs={2}>Cancel</Button>
                                </Col>

                                <Col className="center spacer">
                                    <Button className="btn btn-lg bg-muted text-white btn-outline-muted" xs={2}>Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                </ModalBody>
               

            </Modal>
        </div>
    )
}

export default ModalComponent
