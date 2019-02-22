import * as React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn} from "mdbreact";

class Home extends React.Component {
    
  constructor(props) {
    super(props);
    this.alPresionarBotonIng = this.alPresionarBotonIng.bind(this)
    this.alPresionarBotonEco = this.alPresionarBotonEco.bind(this)
    this.alPresionarBotonHum = this.alPresionarBotonHum.bind(this)
    this.alPresionarBotonAgr = this.alPresionarBotonAgr.bind(this)


  }

  alPresionarBotonIng() {
      this.props.propBandIng();
      this.props.propAlPresionarBoton1();
  }

  alPresionarBotonEco() {
    this.props.propBandEco();
    this.props.propAlPresionarBoton1();
}

  alPresionarBotonHum() {
    this.props.propBandHum();
    this.props.propAlPresionarBoton1();
}

  alPresionarBotonAgr() {
    this.props.propBandAgr();
    this.props.propAlPresionarBoton1();
}



    render() {
      return (
        
          <div>
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                    <img className="img-fluid" src="http://www.seu.unju.edu.ar/wp-content/uploads/2018/11/LogoSeuNexos2RED.jpg"  alt="Responsive image"/>
                    </div>
                  </div>
                </div>
              </div>

              <div>          
              <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">
                Programa De Articulación UNJu y Escuelas Secundarias – NEXOS
                </h2>
                <p className="grey-text w-responsive mx-auto mb-5">
                Ha sido pensado desde la Secretaría de Políticas Universitarias del Ministerio de Educación y Deportes de la Nación como una estrategia de integración entre los distintos niveles y ámbitos del sistema educativo cuya meta es impulsar una política pública que promueva la construcción de un diagnóstico compartido y el diseño de un plan de trabajo común, sustentado en dos subprogramas de articulación: UNIVERSIDAD – ESCUELA SECUNDARIA y EDUCACIÓN SUPERIOR UNIVERSITARIA Y NO UNIVERSITARIA.
                </p>

                <MDBRow className="text-center">

                      {/* INGENIERIA */}
                      <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                          <img
                            src="http://us.cdn.salta.eltribuno.info.s3.amazonaws.com/032017/1488838166991.jpg"
                            alt=""
                            className="img-fluid"
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                          <h4 className="font-weight-bold my-3">Facultad de Ingeniería</h4>
                          <p className="grey-text">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae.
                          </p>
                          <MDBBtn onClick={this.alPresionarBotonIng}>Ver Carreras</MDBBtn>  
                        </MDBCardBody>
                      </MDBCol>

                      {/* ECONOMICAS */}
                      <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                          <img
                            src="http://www.jujuyalmomento.com/upload/img/facultad-de-humanidades_6766.jpg"
                            alt=""
                            className="img-fluid"
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                          <h4 className="font-weight-bold my-3">Facultad de Ciencias Economicas</h4>
                          <p className="grey-text">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae.
                          </p>
                          <MDBBtn onClick={this.alPresionarBotonEco}>Ver Carreras</MDBBtn>
                        </MDBCardBody>
                      </MDBCol>

                      {/* HUMANIDADES */}
                      <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                          <img
                            src="http://www.jujuyaldia.com.ar/wp-content/uploads/2011/11/humanidades-patio-1.jpg"
                            alt=""
                            className="img-fluid"
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                          <h4 className="font-weight-bold my-3">Facultad de Humanidades y Ciencias Sociales</h4>
                          <p className="grey-text">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae.
                          </p>
                          <MDBBtn onClick={this.alPresionarBotonHum}>Ver Carreras</MDBBtn>
                        </MDBCardBody>
                      </MDBCol>

                      {/* AGRARIAS */}
                      <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                          <img
                            src="http://noticias.unju.edu.ar/noticias/serv/notis/100_FotoAgrarias.JPG"
                            alt=""
                            className="img-fluid"
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                          <h4 className="font-weight-bold my-3">Facultad de Ciencias Agrarias</h4>
                          <p className="grey-text">
                            Temporibus autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates repudiandae.
                          </p>
                          <MDBBtn onClick={this.alPresionarBotonAgr}>Ver Carreras</MDBBtn>
                        </MDBCardBody>
                      </MDBCol>

                </MDBRow>
              </section>
              </div>
          </div>

               


            
        )
    }
}

export default Home;