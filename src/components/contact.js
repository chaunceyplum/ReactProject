import React from 'react'
import { Button, Col, Container, Label, Row } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form'

const contact = () => {

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPassword = val => /^(?=.*\d)[a-zA-Z0-9]{8,16}$/




    return (
            <div className="bgcolor contactSpacer ">
                <Container className="bgcolorcontact formy">
                    <LocalForm className="bgcolorcontact">
                        <h1 className="text-center">
                            Sign Up
                        </h1>
                        <Row className="form-group">
                            <Label htmlFor="name" className="text-center spacer" placeholder="name">Name</Label>
                            <Col />
                            <Col className="col-8 center align-center" xs={10}>
                                <Control.text model=".firstName" className="text-center" id="firstName" name="firstName" placeholder="First Name" className="form-control" validators={{ required, minLength: minLength(2), maxLength: maxLength(15)}} />
                                <Errors
                                        className="text-danger"
                                        model=".firstName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                            </Col>   
                            <Col />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastName" className="text-center spacer" >Last Name</Label>
                            <Col />
                            <Col className="col-8 center" xs={10}>
                                <Control.text model=".lastName" id="lastName" name="lastName" placeholder="Last Name" className="form-control" validators={{ required, minLength: minLength(2), maxLength: maxLength(15)}}  />
                                <Errors
                                        className="text-danger"
                                        model=".lastName"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />

                            </Col>
                            <Col />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email"  className="text-center spacer" >Email</Label>
                            <Col />
                            <Col className="col-8 center" xs={10}>
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
                            <Col className="col-8 center " xs={10}>
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
                                <Button className="btn btn-lg bg-muted text-white btn-outline-muted" xs={2}>Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </Container>
            </div>
    )
}

export default contact
