import React from 'react'
//import { FadeTransform, Fade, Stagger } from 'react-animation-components';

import { Row, Col} from 'reactstrap'
import '../App.css'


const Home = () => {
    
    return (
        <div className="pcolor text-white">
          <Row className="center">
          <img src="./stars.jpg" alt="" className="homeimg"/>            
          
            
          </Row>
          <Row className="fullscreen portcolor spacer">
          <h1 className="spacer center footercolor curvy">Authentic & Old~Fashioned</h1> 
            <p className="spacer footercolor center curvy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Row>
          
          
            <Row  className="spacer center portcolor" >
              <Col>
                <img src="/cut3.jpeg"  alt="" className="homeflick curvy"/>
              </Col>
            </Row>
            <Row  className="spacer center portcolor" >
              <Col>
                <img src="/cut5.jpeg"  alt="" className="homeflick curvy"/>
              </Col>
            </Row>
            <Row  className="spacer center portcolor" >
              <Col >
                <img src="/cut4.jpeg"  alt="" className=" center homeflick curvy"/>
              </Col>
            </Row>
          
          {/* <Row>

          </Row>
          <Row>

          </Row> */}
          
          <Row  className="fullscreen center portcolor spacer ">
            <h1 className="footercolor curvy spacer"><strong>Barber Job Description</strong></h1>
            <p className="footercolor curvy spacer" >
              We are looking to hire a dedicated barber to consult with clients and ensure that all their hair-related needs are taken care of. The barber’s responsibilities include cutting, trimming, styling, and coloring client’s hair according to their instructions, fitting and grooming hairpieces, and billing clients. You should also be able to provide hairstyle suggestions and haircare advice to clients.
            </p>
            <p className="footercolor curvy spacer">
              To be successful as a barber, you should be able to provide quality facial hair grooming services to clients. Ultimately, a top-notch barber should keep abreast of new and emerging hairstyles and trends.
            </p>
            <h1 className="footercolor curvy spacer">
              <strong>Barber Responsibilities: </strong>
            </h1>
            <ul className="footercolor curvy spacer">
              <li>
                Welcoming clients and consulting with them on their desired hairstyles.
              </li>
              <li>
                Cutting and trimming hair according to clients' instructions.
              </li>
              <li>
                Styling hair using chemical solutions and styling tools.
              </li>
              <li>
                Shaving, trimming and shaping clients’ beards and mustaches.
              </li>
              <li>
                Washing and conditioning clients’ hair.
              </li>
              <li>
                Providing hair treatments and coloring.
              </li>
              <li>
                Ensuring that combs, scissors, razors, and other instruments are cleaned and sanitized after each use.
              </li>
              <li>
                Supervising apprentices and trainees.
              </li>
              <li>
                Providing hairstyle suggestions to clients.
              </li>

            </ul>
          </Row>
          
        </div>
    )
}

export default Home
