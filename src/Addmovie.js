import React, { Component } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Addmovie({ movies , setmovies }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Newmovie, setNewmovie] = useState({
        name:"",
        posteurl:"",
        description:"",
        rating:"",

    });
    const add=()=>{
        setmovies([...movies , Newmovie]);
    };
    return (
    <div >
    <Button variant="primary" style={{backgroundColor:"rgb(23, 180, 23)",color:"white",border:"none" ,borderRadius:"50%" , marginTop:"40px" }} onClick={handleShow}>
      +
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add movies</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name </Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e)=>setNewmovie({...Newmovie,name:e.target.value})}/>
        </Form.Group>
      
      
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Image </Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Image" onChange={(e)=>setNewmovie({...Newmovie,posterurl:e.target.value})} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description </Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Description" onChange={(e)=>setNewmovie({...Newmovie,Description:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rate </Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Rate" onChange={(e)=>setNewmovie({...Newmovie,Rating:e.target.value})}/>
        
      </Form.Group>
      

      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" style={{backgroundColor:"rgb(23, 180, 23)", color:"white", border:"none"}}
        onClick={() => {add();handleClose()}} 
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default Addmovie