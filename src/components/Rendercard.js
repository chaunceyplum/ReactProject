import React from 'react'
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle, Col } from 'reactstrap'

const Rendercard = (props) => {
    // const displayCuts = (props) => {
    //     const {cuts} = props

    //     if (cuts.length >0) {
    //         return(
    //             cuts.map((cut, index) => {
    //                 console.log(cut)
    //                 return(
    //                     <div key={cut.id}>
    //                         <h3>
    //                             {cut.Name}
    //                         </h3>
    //                         <p>
    //                             {cut.Description}
    //                         </p>
    //                         <span></span>

    //                     </div>
    //                 )
    //             })
    //         )
    //     } else {
    //         return(
    //             <h3>
    //                 No cuts yet
    //             </h3>
    //         )
    //     }
    // }
    // return(
    //     <>
    //         {displayCuts(props)}
    //     </>
    // )
    for (let i=0;props.cuts.length >= i; i++){
        return(
            <Col key ={props.cuts.id}>
            <Card>
                <CardHeader>
                    <CardText>
                        {props.cuts.Name}
                    </CardText>
                </CardHeader>
                <CardImg src={props.cuts.Image} />
                <CardBody>
                    <CardText>
                        {props.cuts.Description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
        )
        
    }

}

export default Rendercard
