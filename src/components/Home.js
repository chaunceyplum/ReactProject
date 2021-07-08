import React from 'react'

import { Row, Col} from 'reactstrap'
import '../App.css'

const Home = () => {
    
    return (
        <div className="bgcolor text-white">
          <Row>
            <img src="/barbershop.jpeg" alt="" className="homeimg"/>
          
            <h1 className="spacer">Authentic & Old~Fashioned</h1> 
          </Row>
          <Row>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Row>
          
          <Row>
            <Col>
              <img src="/cut3.jpeg"  alt="" className="homeflick"/>
            </Col>
            <Col>
              <img src="/cut5.jpeg" alt="" className="homeflick"/>
            </Col>
            <Col>
              <img src="/cut4.jpeg" alt="" className="homeflick"/>
            </Col>
          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
          <Row  className="center pcolor">
            <h1><strong>Barber Job Description</strong></h1>
            <p>
              We are looking to hire a dedicated barber to consult with clients and ensure that all their hair-related needs are taken care of. The barber’s responsibilities include cutting, trimming, styling, and coloring client’s hair according to their instructions, fitting and grooming hairpieces, and billing clients. You should also be able to provide hairstyle suggestions and haircare advice to clients.
            </p>
            <p>
              To be successful as a barber, you should be able to provide quality facial hair grooming services to clients. Ultimately, a top-notch barber should keep abreast of new and emerging hairstyles and trends.
            </p>
            <h1>
              <strong>Barber Responsibilities: </strong>
            </h1>
            <ul>
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
