import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa'; // Make sure to install react-icons
import { MdEmail } from 'react-icons/md'; // Make sure to install react-icons
import './Footer.css';

const Footer = () => {
    return (
        <Navbar  className="footer">
            <Container>
                <Row className="w-100 text-center">
                    <Col md={12} className="mb-2">
                        <h6><a href='https://maps.app.goo.gl/Hdfpxv436pMbEZWM9'>Kings Engineering College, Sriperumbudur, Tamil Nadu</a></h6>
                    </Col>
                    <Col md={12} className="mb-2">
                        <h4>Reach out to us</h4>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/technokings_2k24?igsh=MTNkMDRyNm5yaGE5bQ==" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                                <FaInstagram size={24} />
                                <span> Instagram</span>
                            </a>
                            
                            
                        </div>
                        <div className='social-icons'>
                        <a href="mailto:technokingskec2022@gmail.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                                <MdEmail size={24} />
                                <span> technokingskec2022@gmail.com</span>
                            </a>
                        </div>
                        
                    </Col>
                    <Col md={3} className="mb-3">
                    <FaPhoneAlt size={24} className='pe-2'/>
                        <span>KAMESH E:  +919360773249</span>
                    </Col>
                    <Col md={3} className="mb-3">
                    <FaPhoneAlt size={24} className='pe-2'/>
                        <span>MAARI MURUGAN P: +919363074409</span>
                    </Col>
                    <Col md={3} className="mb-3">
                    <FaPhoneAlt size={24} className='pe-2'/>
                        <span>VINOTHAN S: +917548804092</span>
                    </Col>
                    <Col md={3} className="mb-3">
                    <FaPhoneAlt size={24} className='pe-2'/>
                        <span > VISHWA SR: +917695913769</span>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;
