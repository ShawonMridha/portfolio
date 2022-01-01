import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../../file/Untitled document (3).pdf'
import './Links.css'


const Links = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end color">
                    <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link  as={Link} to="/blog">Blogs</Nav.Link>
                    <Nav.Link  as={Link} to="/aboutme">About Me</Nav.Link>
                    {/* <Nav.Link  as={Link} to="/login">Login</Nav.Link> */}
                   <Nav.Link  as={Link} to="/myProjects">My projects</Nav.Link>
                        <Navbar.Text>
                            {/* Signed in as: <a href="/login">{ <span>{user.displayName}</span>}</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Links;