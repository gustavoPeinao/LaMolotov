import * as React from 'react';
// import './App.css';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer'
// import Body from './components/body/Body';
// import Footer from './components/footer/Footer';


// interface Props {

// }

// interface State {

// }

class Container extends React.Component {
   
  render() {
    return (
       <div> 
            <div>
                <Header />
            </div>
            <div>
                <Body />
                
            </div>
            <div>
                <Footer />  
            </div>
       </div>
    );
  }
}

export default Container;