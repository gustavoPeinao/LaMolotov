import * as React from 'react';
import {MDBBtn} from "mdbreact";
import Home from './Home';
import Ingenieria from './Ingenieria';
import Economicas from './Economicas';
import Humanidades from './Humanidades';
import Agrarias from './Agrarias';
import Reproductor from '../reproductor/Reproductor';
import Transmisiones from '../transmiciones/Transmiciones'
// import Slider from '../slider/Slider'


import PropTypes from 'prop-types';


class Body extends React.Component {

  constructor (props) {
    
    super(props);
    
    // this.state = {
    //   display: 'block',

    //   displayIng: 'none',
    //   bandIng: false,

    //   displayEco: 'none',
    //   bandEco: false,

    //   displayHum: 'none',
    //   bandHum: false,

    //   displayAgr: 'none',
    //   bandAgr: false,
      
    // };
    // this.handleMostrarHome = this.handleMostrarHome.bind(this);
    // this.handleBandIng = this.handleBandIng.bind(this);
    // this.handleBandEco = this.handleBandEco.bind(this);
    // this.handleBandHum = this.handleBandHum.bind(this);
    // this.handleBandAgr = this.handleBandAgr.bind(this);


  }

  // handleBandIng(){
  //   if(this.state.bandIng == false) {
  //     this.setState({
  //       bandIng: true,
  //       displayIng: 'block'
  //     })
  //   }
  //   else{
  //     this.setState({
  //       bandIng: false,
  //       displayIng: 'none'
  //     })
  //   }
  // }

  // handleBandEco(){
  //   if(this.state.bandEco == false) {
  //     this.setState({
  //       bandEco: true,
  //       displayEco: 'block'
  //     })
  //   }
  //   else{
  //     this.setState({
  //       bandEco: false,
  //       displayEco: 'none'
  //     })
  //   }
  // }

  // handleBandHum(){
  //   if(this.state.bandHum == false) {
  //     this.setState({
  //       bandHum: true,
  //       displayHum: 'block'
  //     })
  //   }
  //   else{
  //     this.setState({
  //       bandHum: false,
  //       displayHum: 'none'
  //     })
  //   }
  // }

  // handleBandAgr(){
  //   if(this.state.bandAgr == false) {
  //     this.setState({
  //       bandAgr: true,
  //       displayAgr: 'block'
  //     })
  //   }
  //   else{
  //     this.setState({
  //       bandAgr: false,
  //       displayAgr: 'none'
  //     })
  //   }
  // }


  // handleMostrarHome () {
  //   if(this.state.display == 'block'){
  //     this.setState({
  //       display: 'none',
        
  //     })
  //   }
  //   else{
  //     this.setState({
  //       display: 'block',
  //     })
  //   }
  // }
 
 
  render() {

    return (
      <div>

          <div>
            <Reproductor />
          </div>
          {/* <div>
            <Slider />
          </div> */}
          <div>
            <Transmisiones />
          </div>
          {/* <div style={{display: this.state.display}}>
            <Home propBandIng={this.handleBandIng} propBandEco={this.handleBandEco} propBandHum={this.handleBandHum} propBandAgr={this.handleBandAgr} propAlPresionarBoton1={this.handleMostrarHome}/>
          </div>

          <div style={{display: this.state.displayIng}}>
            <Ingenieria propVolverIng={this.handleBandIng} propAlPresionarBoton2={this.handleMostrarHome} /> 
          </div>
          <div style={{display: this.state.displayEco}}>
            <Economicas propVolverEco={this.handleBandEco} propAlPresionarBoton3={this.handleMostrarHome}/> 
          </div>
          <div style={{display: this.state.displayHum}}>
            <Humanidades propVolverHum={this.handleBandHum} propAlPresionarBoton4={this.handleMostrarHome}/> 
          </div>
          <div style={{display: this.state.displayAgr}}>
            <Agrarias propVolverAgr={this.handleBandAgr} propAlPresionarBoton5={this.handleMostrarHome}/> 
          </div> */}
      </div>
    );
  }



}

export default Body;