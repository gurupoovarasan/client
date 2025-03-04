import './App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import bank from './bank.png'; // Importing the logo
import { HashRouter, Routes, Route } from 'react-router-dom';
import Deposit from './deposit';
import Cashback from './cashback';
import Register from './register';
import Alldata from './alldata';
import {useState} from 'react';
import banking from './images/bank.jpg'

function App() {
let [isModel, setIsModel]=useState(true);

  return (
    <HashRouter>
     
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={bank} 
              alt="Logo"
              className="d-inline-block align-top"
              style={{ width: "30px", height: "30px" }} 
            />
            {" "}THIEF BANK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" onClick={()=>setIsModel(true)} >Home </Nav.Link>
              <Nav.Link href="#register" onClick={()=>setIsModel(false)}>Register </Nav.Link>
              <Nav.Link href="#deposit" onClick={()=>setIsModel(false)}>Deposit</Nav.Link>
              <Nav.Link href="#cashback" onClick={()=>setIsModel(false)}>Cashback</Nav.Link>
              <Nav.Link href="#alldata" onClick={()=>setIsModel(false)}>All data</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


 { isModel && <div data-bs-theme="dark">
 
    <img
      className="  cus-img"
      src={banking}
      alt="First slide"
    />
  


 </div>} 

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/cashback" element={<Cashback />} />
        <Route path="/alldata" element={<Alldata />} />
      </Routes>
      

    </ HashRouter>
  );
}

export default App;
