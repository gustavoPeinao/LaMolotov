import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
    MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline } from "mdbreact";
import "./Header.css";
import logoMolotov from './logoMolotov.png';



class Header extends React.Component{
    
    state = {
        collapsed: false
      };
      
      handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
      };
   


    render() {
        const overlay = (
            <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
          );
        return (
            <div className="apppage">
                <Router>
                    <div>
                        <MDBNavbar color="primary-color" dark expand="md" fixed="top" scrolling transparent>
                            <MDBContainer>
                                <MDBNavbarBrand>
                                    <img
                                        src={logoMolotov}
                                        width="80" 
                                        alt="logo"
                                        className="App-logo"
                                    />
                                </MDBNavbarBrand>

                                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                                <MDBCollapse isOpen={this.state.collapsed} navbar>
                                    <MDBNavbarNav right>
                                        <MDBNavItem active>
                                            <MDBNavLink to="#!">INICIO</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">NOTICIAS</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">PROGRAMACIÓN</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">RANKING</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">COMUNIDAD</MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#!">CONTÁCTANOS</MDBNavLink>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    {/* <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBFormInline waves>
                                            <div className="md-form my-0">
                                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                            </div>
                                            </MDBFormInline>
                                        </MDBNavItem>
                                    </MDBNavbarNav> */}
                                </MDBCollapse>
                            </MDBContainer>
                        </MDBNavbar>
                        {this.state.collapsed && overlay}
                    </div>
                </Router>

                
                <MDBView>
                    <MDBMask className="d-flex justify-content-center align-items-center gradient">
                    <MDBContainer>
                        <MDBRow>
                        <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                            <h1 className="h1-responsive font-weight-bold mt-sm-5">La Mejor Radio{" "}</h1>
                            <hr className="hr-light" />
                            <h6 className="mb-4">
                            Lorem ipsum principal dolor sit amet, consectetur adipisicing elit.
                            Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                            veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                            molestiae iste.
                            </h6>
                            <MDBBtn color="white">DESCARGAR</MDBBtn>
                            <MDBBtn outline color="white">CONOCÉ MÁS</MDBBtn>
                        </div>
                        <MDBCol md="6" xl="5" className="mt-xl-5">
                            <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="img-fluid" />
                        </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
          

               


            
        )
    }
}

export default Header;