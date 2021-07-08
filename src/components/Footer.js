import React from 'react'
import { Col, Row } from 'reactstrap'





const Footer = () => {
    return (
        <div className="footercolor">
            <Row className="text-center spacer" color="dark">
                <h1>Our Location</h1>
                <p className="spacer">1179 Chauncey St, Brooklyn, NY, 11233</p>
            </Row>
            
            <Row className="text-center spacer">
                <h1 className="spacer">Contact Info</h1>
                <a role="button" class="btn btn-link spacer nav-link text-white" href="tel:+17185901886"> 1-(718) 723-1886</a><br />
                <a role="button" class="btn btn-link spacer nav-link text-white" href="Classycutz@gmail.com">Classycutz@gmail.com</a>
            </Row>
            <Row className="text-center spacer">
                <Col>
                    <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                </Col>
                <Col>
                    <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                </Col>
                <Col>
                    <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                </Col>
                <Col>
                    <a class="btn btn-social-icon btn-google " href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                </Col>

            </Row >
            
            <Row className="text-center spacer">
                <h1 className="spacer">Working Hours</h1>
                <p className="spacer">Mon-Fri: 9:00 AM - 8:00 PM</p>
                <p className="">Sat-Sun: 11:00 AM - 5:00 PM</p>
            </Row>

        </div>
    )
}

export default Footer
