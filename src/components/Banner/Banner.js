import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import photo from '../image/shawon.jpg';
import resume from '../../file/Untitled document (3).pdf'
import './Banner.css';


const Banner = () => {
    
    return (
        <div className="background">
           
         <Row>
              <Col sm={6}>
              <img className="img-fluid img-thumbnail size" src={photo} alt="" />
              </Col>
              <Col sm={6}>
              <h3>I AM SHAWON ISLAM</h3>
              <h4>React Front-End Developer</h4>
              <Row>
                  <Col sm={6} className={"atachat"}>
                  <Nav.Link  as={Link} to="/login">
                  <button type="button" class="btn btn-primary">Contact Me</button>
                  </Nav.Link>
                  </Col>
                  <Col sm={6} className={"atachment"}>
                  <a href={resume} download="pdf">
                  <button type="button" class="btn btn-primary">Resume Download</button>
                  </a>
                  </Col>
              </Row>
              </Col>
          </Row>
        </div>
    );
};

export default Banner;