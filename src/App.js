import React from 'react'

import './App.css';
import Mynav from './components/nav';
import Portfolio from './components/portfolio'
import Port from './components/Port'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/contact'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
      
    }
  }
  
  
  render(){

    const HomePage = () => {
      return(
        <Home />
      )
    }
    const ContactPage = () => {
      return (
        <Contact />
      )
    }
    const PortfolioPage = () => {
      return (
        <Port />
      )
    }

    return (
      <div>
          <BrowserRouter>
              <Mynav />
                

                    <Switch>

                      <Route path='https://chaunceyplum.github.io/ReactProject/home' component={HomePage} />
                      
                      <Route path='https://chaunceyplum.github.io/ReactProject/contactus' component={ContactPage} />

                      <Route path="https://chaunceyplum.github.io/ReactProject/portfolio" component={PortfolioPage} />
                      {/* <Route exact path ='/portfolio' render={() =>{<Portfolio />}}  /> */}
                      <Redirect to ='https://chaunceyplum.github.io/ReactProject/home' />

                    </Switch>
                  
              <Footer />
          </BrowserRouter>
        
      </div>

      

    );
  }
}

export default App;
