import React from 'react'

import './App.css';
import Mynav from './components/nav';
import Portfolio from './components/portfolio'
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
        <Portfolio />
      )
    }

    return (
      <div>
          <BrowserRouter>
              <Mynav />
                

                    <Switch>

                      <Route path='/home' component={HomePage} />
                      
                      <Route path='/contactus' component={ContactPage} />

                      <Route path='/portfolio'component={PortfolioPage} />
                      <Route exact path ='/portfolio' render={() =>{<Portfolio Cuts={this.state.Cuts} />}}  />
                      <Redirect to ='/home' />

                    </Switch>
                  
              <Footer />
          </BrowserRouter>
        
      </div>

      

    );
  }
}

export default App;
