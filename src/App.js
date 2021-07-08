import React from 'react'
import logo from './logo.svg';
import './App.css';
import Mynav from './components/nav';
import Portfolio from './components/portfolio'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/contact'

import Cuts from './components/cuts'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Cuts:Cuts,
      cutsDescription:this.cutsDescription()
    }
    this.cutsDescription= this.cutsDescription.bind(this)
  }
  
  cutsDescription = () => {
    return(
      <>
        <div key={Cuts.id}>
    <p>{Cuts.description}</p>
        </div>

      </>
    )
  }
  render(){
    return (
      <div>
        <Mynav />
        <Home />
        <Contact />
        <Portfolio />
        
        <Footer />
      </div>
    );
  }
}

export default App;
