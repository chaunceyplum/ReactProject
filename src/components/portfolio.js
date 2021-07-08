import React from 'react'
import { Col, Container, Row,Card,CardTitle,CardBody,CardImg, CardImgOverlay, Button } from 'reactstrap'



const Portfolio = (props) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card inverse>
                        <CardImg width="100%" src={props.image} alt={props.name} />
                        <CardImgOverlay>
                            <CardTitle><h6>{props.name}</h6></CardTitle>
                            <Button onClick={props.cutsDescription()}></Button>
                        </CardImgOverlay>
                        </Card>
                        
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                    <Col>
                    
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
