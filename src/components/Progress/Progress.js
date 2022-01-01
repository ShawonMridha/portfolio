import { Container, ProgressBar } from 'react-bootstrap';
import React from 'react';
import './Progress.css'

const Progress = () => {
    return (
        <div className="mt-5">
           <Container>
           <div className="gray">
               {<h3>Js<ProgressBar animated variant="success" now={90} /></h3>}
               <h3>React<ProgressBar animated variant="info" now={88} /></h3>
               <h3>Firebase<ProgressBar animated variant="danger" now={80} /></h3>
               <h3>MongoDB<ProgressBar animated variant="warning" now={70} /></h3>
               
           </div>
           </Container>
        </div>
    );
};

export default Progress;