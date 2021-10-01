import React from 'react'
import { Col, Row,Card,CardTitle,CardBody,CardImg, CardText, CardHeader } from 'reactstrap'



class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state={
            mohawkName:"Mohawk",
            mohawkPrice:20,
            mohawkImage:'./mohawk.jpeg',
            description: "mohawk (also referred to as a Mohican) is a hairstyle in which, in the most common variety, both sides of the head are shaven, leaving a strip of noticeably longer hair in the center. It is today worn as an emblem of non-conformity.",
            fadeName:"Fade",
            fadeImage:'',
            fadePrice:20,
            fadeDescription: "The 'fade' hairstyle is a popular short haircut for men—it actually made Google's 'Year in Search' trending data list for 2020—and it's sometimes also called 'military reg.' It simply means that your hair tapers from the bottom to the top and it can be as close to the skin as you like.",
            taperName:"Taper",
            taperImage:"",
            taperPrice: 20,
            taperDescription: "A taper is when your hair gradually changes from one length to another. A fade is shorter than a taper and ends when it reaches the skin — essentially “fading” in. Tapers and fades can be achieved with shears, or with clippers that have guards set to various lengths.",
            baldyName:"Baldy",
            baldyImage:"",
            baldyPrice: 20,
            baldyDescription: "A baldy cut is a great choice for men for a lot of different reasons. Firstly, they are very easy to style and maintain. When you get up in the morning, you do not need to take a long time fiddling with your look.",
        
            loading: true
        }
    }

    Rendercard = () => {
        
        return(
            <div></div>
        )
    }
    async componentDidMount (){
        const url ="https://localhost:3000"
         const res = await fetch(url,
           { method: 'Get', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached})
        }
        )
        const data = await res
        console.log(data.json)

    }

    // fetchy = () => {
    //     return fetch('http://localhost:3443/cuts/', {
    //         method: 'GET'
    //     }).then((response) => {
    //         console.log(response);
    //     })
    // }

    
    


    render(){
        return(
            <div className="portcolor spacer">

                
                    <h1 className="center spacer">My Specialty Cuts</h1>
                    
                        
                    {/* <Row>
                        <Col>
                        <Card bg="dark" >
                            <CardHeader className="cards">
                                <CardTitle >
                                    <h1>{this.state.mohawkName}</h1>
                                </CardTitle>
                                <CardText>
                                    specialty haircut ${this.state.mohawkPrice}
                                </CardText>
                            </CardHeader>
                            <CardImg src="./mohawk.jpeg" alt={this.state.mohawkName} />
                            <CardBody className="cards">
                                {this.state.description}
                            </CardBody>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card bg="dark" >
                            <CardHeader className="cards">
                                <CardTitle >
                                    <h1>{this.state.fadeName}</h1>
                                </CardTitle>
                                <CardText>
                                    specialty haircut ${this.state.fadePrice}
                                </CardText>
                            </CardHeader>
                            <CardImg src="./fade.jpeg" alt={this.state.fadeName} />
                            <CardBody className="cards">
                                {this.state.fadeDescription}
                            </CardBody>
                            
                        </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                        <Card bg="dark" >
                            <CardHeader className="cards">
                                <CardTitle >
                                    <h1>{this.state.taperName}</h1>
                                </CardTitle>
                                <CardText>
                                    specialty haircut ${this.state.taperPrice}
                                </CardText>
                            </CardHeader>
                            <CardImg src="./taper.jpeg" alt={this.state.taperName} />
                            <CardBody className="cards">
                                {this.state.taperDescription}
                            </CardBody>
                            
                        </Card>
                        </Col>
                        <Col>
                        <Card bg="dark" >
                            <CardHeader className="cards">
                                <CardTitle >
                                    <h1>{this.state.baldyName}</h1>
                                </CardTitle>
                                <CardText>
                                    specialty haircut ${this.state.baldyPrice}
                                </CardText>
                            </CardHeader>
                            <CardImg src="./baldy.jpg" alt={this.state.baldyName} />
                            <CardBody className="cards">
                                {this.state.baldyDescription}
                            </CardBody>
                            
                        </Card>
                        </Col>
                    </Row> */}


                
            </div>
        )
    }
}

export default Portfolio