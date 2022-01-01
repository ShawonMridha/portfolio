import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowCards.css'


const ShowCards = (props) => {
    const{img,id}=props.service;
    return (
        <div className="card">
            <Col data='fade-up'>
               <Card className="card-size">
               <Card.Img className="img-fluid img-thumbnail" variant="top" src={img} />
               <Card.Body>
              <Card.Title></Card.Title>
               <Card.Text>
              </Card.Text>
             <Link to={`/details/${id}`}>
                 <button className="btn btn-primary">Details</button>
             </Link>
             </Card.Body>
             </Card>
          </Col>
        </div>
    );
};

export default ShowCards;