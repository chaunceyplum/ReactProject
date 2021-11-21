import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle, Col, Container, Row } from 'reactstrap'

const Port = () => {
    
    const [cuts, setCuts] = useState([])
    
    useEffect(() => {
        fetch('https://classycutzbackend.herokuapp.com/',{
           method:'GET',
           mode:'cors',
           headers: {
               'Content-Type' : 'application/json'
           } 
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => setCuts(jsonRes.cuts))
        .then(console.log(cuts))
    },[])
    
 
    
    
    
    return (
        
        <div className="portcolor spacer">

                
            <h1 className="center spacer">My Specialty Cuts</h1>

    
    
            <Row>
                
                    {
                    
                        cuts.length > 0 && cuts.map(
                            (cut, index)=> {
                                console.log(cut)
                                return(
                                    
                                        
                                    <Col xs={12}   lg={6} className="center rounded ">
                                        <Card  key={index} bg='dark' className=" center cards spacer formy rounded">
                                            <CardHeader className="cards">
                                                <CardTitle >
                                                    <h3 className="text-white">
                                                    {cut.Name}
                                                    </h3>
                                                </CardTitle>
                                                <CardSubtitle >
                                                    <h3>
                                                    {`$${cut.Price}`}
                                                    </h3>
                                                </CardSubtitle>
                                            </CardHeader>
                                            <CardImg src={cut.Image} className="col-8" />
                                            <CardBody>
                                                
                                                <p >
                                                    {cut.Description}
                                                </p>
                                            </CardBody>
                                        </Card>
                                        <br />
                                        <br />
                                    </Col>
                                )
                            }
                        )
                
                    }


                
            </Row>





        
            
        </div>
    )
}

export default Port
