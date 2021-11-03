import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle } from 'reactstrap'

const Port = () => {
    
    const [cuts, setCuts] = useState([])
    
    useEffect(() => {
        fetch('https://localhost:3000/',{
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

    
    






            {
                
                cuts.length > 0 && cuts.map(
                    (cut, index)=> {
                        console.log(cut)
                        return(
                            
                                <Card key={index} bg='dark' className="cards">
                                    <CardHeader className="cards">
                                        <CardTitle >
                                        {cut.Name}
                                        </CardTitle>
                                        <CardSubtitle >
                                            {`$${cut.Price}`}
                                        </CardSubtitle>
                                    </CardHeader>
                                    <CardImg src={cut.Image} />
                                    <CardBody>
                                        
                                        <p >
                                            {cut.Description}
                                        </p>
                                    </CardBody>
                                </Card>
                            
                        )
                    }
                )
               
            }
            
        </div>
    )
}

export default Port
