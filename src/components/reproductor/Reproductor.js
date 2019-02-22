import * as React from 'react';
import play from './play.svg';
import pause from './pause.svg';
import rev from './rev.svg';
import fow from './fow.svg';



class Reproductor extends React.Component {

    constructor(props) {
        super(props);
        
    }

   
  render() {
    return (
       <div className="p-3 mb-2 bg-dark text-white" style={{backgroundColor: "black"}}> 
            <img className="rev" src={rev} width="80"/>
            <img src={play} width="80"/>
            <img src={pause} width="80"/>
            <img src={fow} width="80"/>
        </div>

    );
  }
}

export default Reproductor;