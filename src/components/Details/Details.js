import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'


const Details = () => {
    const{id}=useParams()
    const[details, setDetails]= useState([])
   useEffect(()=>{
       fetch('/detailsData.json')
       .then(res=>res.json())
       .then(data=>setDetails(data))
   },[])

   const ExactItem = details.filter(dt=> dt.id===id)
    return (
        <div className="link">
          <h3>Projects Details</h3>
            <a href={ExactItem[0]?.link}>live site</a>
            <a href={ExactItem[0]?.git}>GitHub</a>
            <a href={ExactItem[0]?.server}>GitHub Server</a>
            <h5>{ExactItem[0]?.technologies}</h5>
            <h5>{ExactItem[0]?.client}</h5>
            <h5>{ExactItem[0]?.design}</h5>
            {/* <img src={ExactItem[0]?.img} alt="" />
            <img src={ExactItem[0]?.img2} alt="" />
            <img src={ExactItem[0]?.img3} alt="" /> */}
            <Container>
           <Row xs={1} md={3} className="g-4">
           <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={ExactItem[0]?.img} />
              </Card>
         </Col>

           <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={ExactItem[0]?.img2} />
             </Card>
         </Col>

           <Col>
               <Card className="size">
               <Card.Img className="card" variant="top" src={ExactItem[0]?.img3} />
             </Card>
         </Col>
            </Row>
          </Container> 
        </div>
    );
};

export default Details;