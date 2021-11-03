import axios from 'axios';
import React, { useState,setState } from 'react'
import { Col, Row,Card,CardTitle,CardBody,CardImg, CardText, CardHeader, CardImgOverlay } from 'reactstrap'


import allCuts from './Cuts'


class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state={
            mohawkName: "Mohawk",
            mohawkPrice: 20,
            mohawkImage: '/mohawk.jpeg',
            mohawkDescription: "mohawk (also referred to as a Mohican) is a hairstyle in which, in the most common variety, both sides of the head are shaven, leaving a strip of noticeably longer hair in the center. It is today worn as an emblem of non-conformity.",
        
        
        
            fadeName:"Fade",
            fadeImage: '',
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
            loading: true,
            
            items:[],
            dataIsLoaded:false



        }
    }

    
    fetchy = () => {
        const url = "http://localhost:3000/"
        axios.get(`${url}`)
        .then((res)=> {
            const allCuts = res.cuts
            this.state.items.setState(allCuts)
        })
        
   }
    
    
    
    
    
    
    
    

    
    


    render(){
        
        return(
            <div className="portcolor spacer">

                
                    <h1 className="center spacer">My Specialty Cuts</h1>
                    
                        
                        
                        

                    
                        <Row bg = "dark">
                        <Card bg="dark" className="cards"  >
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
                                {this.state.mohawkDescription}
                            </CardBody>
                            
                        </Card>
                        </Row>
                        <br />
                        <Row>
                        <Card bg="dark"className="cards" >
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
                        </Row>
                   
                    <br />
                    
                        <Row>
                        <Card bg="dark" className="cards">
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
                        </Row>
                        <br />
                        <Row>
                        <Card bg="dark"className="cards" >
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
                        </Row>
                    


                
            </div>
        )
    }
}

export default Portfolio
