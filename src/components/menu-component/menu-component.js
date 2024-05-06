import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
const MenuComponent = () => {
 return (
 <Navbar bg="dark" variant="dark">
 <Container>
 <Navbar.Brand href="/">PZ</Navbar.Brand>
 <Nav className="me-auto">
 <Nav.Link href="/">Home</Nav.Link>
 <Nav.Link href="/bin">Bin</Nav.Link>
 <Nav.Link href="/about">About</Nav.Link>
 </Nav>
 </Container>
 </Navbar>
 );
};

export default MenuComponent;