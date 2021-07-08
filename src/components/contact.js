import React from 'react'
import { Button, Col, Container, Label, Row } from 'reactstrap'
import { Control, LocalForm } from 'react-redux-form'

const contact = () => {
    return (
            <div className="bgcolor contactSpacer ">
                <Container className="bgcolorcontact formy">
                    <LocalForm className="bgcolorcontact">
                        <h1 className="text-center">Contact Us</h1>
                        <Row className="form-group">
                            <Label htmlFor="name" className="text-center spacer" placeholder="name">Name</Label>
                            <Col />
                            <Col className="col-8 center align-center" xs={10}>
                                <Control.text model=".firstName" className="text-center" id="firstName" name="firstName" placeholder="First Name" className="form-control"  />
                            </Col>   
                            <Col />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastName" className="text-center spacer" >Last Name</Label>
                            <Col />
                            <Col className="col-8 center" xs={10}>
                                <Control.text model=".lastName" id="lastName" name="lastName" placeholder="First Name" className="form-control" />
                            </Col>
                            <Col />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email"  className="text-center spacer" >Email</Label>
                            <Col />
                            <Col className="col-8 center" xs={10}>
                                <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control" />
                            </Col>
                            <Col />
                        </Row>
                        <Row>
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
