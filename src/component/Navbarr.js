import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from "react-rating-stars-component";



function Navbarr({settext,setrate}) {
  return (
    <div className='box'>

        <Navbar bg="light" expand="lg" >
    <Container className='conta' fluid style={{backgroundColor:'rgb(99 108 83)', color:'white',
    height:'100PX', position:"fixed" , marginTop:"40px" }}>
      <Navbar.Brand href="#" style={{color:'white',}}>Movies App</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px'}}
          navbarScroll
        >
          <Nav.Link href="#action1" style={{color:'white'}}>Movies</Nav.Link>
          <Nav.Link href="#action2" style={{color:'white'}}>about</Nav.Link>
          <NavDropdown title="Types" id="navbarScrollingDropdown" style={{color:'white'}} >
            <NavDropdown.Item href="#action3" >Romantic</NavDropdown.Item>
            <NavDropdown.Item href="#action4" >Action </NavDropdown.Item>
            <NavDropdown.Divider />
            
          </NavDropdown>
          <Nav.Link href="#action3" style={{color:'white'}}>
            Contact
          </Nav.Link>
        </Nav>
        <ReactStars 
        count={5}
        size={24}
        activeColor="rgb(23, 180, 23)"  onChange={(newRating)=>setrate(newRating) } 
         
         />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>settext(e.target.value)}
          />
          <Button variant="outline-success" style={{backgroundColor:"rgb(23, 180, 23)",
           color:"white", 
           border:"none"}} 
           >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navbarr