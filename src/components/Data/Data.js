import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowCards from '../ShowCards/ShowCards';

const Data = () => {
    const [service, setService]= useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h4 className="text-primary m-5">My Peojects</h4>
            <Container className={"mt-5"}>
            
           <Row xs={1} md={2} className="g-4">
             {
                service.map(services=> <ShowCards service={services}></ShowCards>)
            }
            </Row>
          </Container> 
        </div>
    );
};

export default Data;