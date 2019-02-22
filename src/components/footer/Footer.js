import * as React from 'react';
// import '../../App.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logoMolotov from './logoMolotov.png';

// interface Props {


// }

// interface State {

// }



class Footer extends React.Component {


    // const CardExample = () => {
    // }


    render() {
        return (
           <MDBFooter color="default-color" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    {/* <MDBCol md="6">
                        <h3 className="title">Programa Nexos</h3>
                        <p>
                        Secretaría de Extensión Universitaria - Universidad Nacional de Jujuy
                        </p>
                    </MDBCol> */}
                    <MDBCol md="12" className="text-center">
                    <img
                        src={logoMolotov}
                        width="300"
                        alt="logo"
                        
                      />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3" style={{marginTop: '20px',}}>
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="#"> ABM - Seguridad Informática </a>
                </MDBContainer>
            </div>
    </MDBFooter>





                )
            }
        }
        
export default Footer;