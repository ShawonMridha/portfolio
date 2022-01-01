import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="mt-5 botom">
            <Container>
            <h5>I am react web Developer.</h5>
            <h4>My Skills:</h4>
                 <h5>Programming Language:HTML,CSS,Javascript</h5>
                  <h5>Javascript Library: React</h5>
                  <h5>CSS Library: Bootstrap,Tailwind css,Material ui.</h5>
                  <h5>Backend: Node.Js</h5>
                  <h5>Authentication: Firebase</h5>
            </Container>
        </div>
    );
};

export default AboutMe;