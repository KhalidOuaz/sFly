// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

import CountUp from 'react-countup';

//import images
import Asset190 from "../../images/illustrator/Asset190.svg";
import Asset189 from "../../images/illustrator/Asset189.svg";
import Asset192 from "../../images/illustrator/Asset192.svg";
import Asset187 from "../../images/illustrator/Asset187.svg";
import faq from '../../images/illustrator/faq.svg';

// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class Faqs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false, 
            collapse1 : true
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <React.Fragment>
                
                <section className="section">
                <div className="container">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">FAQ</h4>
                  </div>
                  </Col>
                  </Row>
                  </div>
                    <div className="container  mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} md={6}>
                                <div className="faq-content mr-lg-5">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card border rounded shadow mb-2">
                                            <Link  to="#" onClick={() => this.setState({collapse1 : !this.state.collapse1,collapse3 : false, collapse2 : false,collapse4 : false})} className={this.state.collapse1 ? "faq position-relative text-primary" :  "faq position-relative text-dark" } >
                                                <div className="card-header bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> Comment SFLY fonctionne ? </h4>
                                                </div>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse1}>
                                                <div className="card-body">
                                                    <p className="text-muted mb-0 faq-ans">
                                                        Pour le décolage de l'avions, il y a une batterie de test a éffectuer avant le décollages,
                                                        Voir si les équipé au sol ont bien checker l'avion et qu'aucune anomalie n'a était détecter.
                                                        Verifier si tout les passager enregister sont bien a bords...
                                                    </p>
                                                </div>
                                            </Collapse>
                                          </div>
                                        <div className="card border rounded shadow mb-2">
                                        <Link  to="#" onClick={() => this.setState({collapse2 : !this.state.collapse2,collapse3 : false, collapse4 : false,collapse1 : false})} className={this.state.collapse2 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <div className="card-header bg-light p-3">
                                                    <h4 className="title mb-0 faq-question">  C'est l'application SFLY ? </h4>
                                                </div>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse2}>
                                                <div className="card-body">
                                                    <p className="text-muted mb-0 faq-ans">
                                                        Sfly est une application, securiser et qui sera sur une tablette.
                                                        
                                                    </p>
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card border rounded shadow mb-2">
                                        <Link  to="#" onClick={() => this.setState({collapse3 : !this.state.collapse3,collapse4 : false, collapse2 : false,collapse1 : false})} className={this.state.collapse3 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <div className="card-header bg-light p-3">
                                                    <h4 className="title mb-0 faq-question">Qui aura acces a la tablette ? </h4>
                                                </div>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse3}>
                                                <div className="card-body">
                                                    <p className="text-muted mb-0 faq-ans">
                                                        Toute perssone habilitée, qui verifira l'etat de lieu de l'avion avant le décollage.
                                                    </p>
                                                </div>
                                            </Collapse>
                                        </div>

                                        <div className="card rounded shadow mb-0">
                                        <Link  to="#" onClick={() => this.setState({collapse4 : !this.state.collapse4, collapse3 : false, collapse2 : false,collapse1 : false})} className={this.state.collapse4 ? "faq position-relative text-primary" :  "faq position-relative text-dark" }>
                                                <div className="card-header bg-light p-3">
                                                    <h4 className="title mb-0 faq-question"> Qui aura acces a l'application ? </h4>
                                                </div>
                                            </Link>
                                            <Collapse isOpen={this.state.collapse4}>
                                                <div className="card-body">
                                                    <p className="text-muted mb-0 faq-ans">
                                                        L'application aura un systeme de droits selon l'habilitation de chacun.
                                                    </p>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={5} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <img src={faq} alt="" />
                            </Col>
                        </Row>
                    </div>

                    <div className="container mt-60">
                        <Row className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    
                                    <div className="watch-video mt-4 pt-2">
                                        
                                        <Link to="#" onClick={this.openModal} className="video-play-icon watch text-dark mb-2 ml-2"><i className="mdi mdi-play play-icon-circle text-center d-inline-block mr-2 rounded-pill text-white position-relative play play-iconbar"></i> WATCH VIDEO</Link>
                                    
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
                           
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Faqs;