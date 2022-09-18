import React, { Component } from 'react'
// FontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faHouse,faUser ,faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// Bootstrap
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


 class NavbarManu extends Component {
  render() {
    return (
      <div>
         <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link className="link" to="/"><FontAwesomeIcon icon={faHouse}/> Home</Link></Nav.Link>
              <Nav.Link><Link className="link" to="/list"><FontAwesomeIcon icon={faList}/> List</Link> </Nav.Link>
              <Nav.Link> <Link className="link" to="/create"><FontAwesomeIcon icon={faPlus}/> Create</Link></Nav.Link>
              <Nav.Link><Link className="link" to="/search"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</Link></Nav.Link>
              {
                localStorage.getItem('loginData')? 
                <Nav.Link><Link className="link" to="/logout"><FontAwesomeIcon icon={faUser}/> Logout</Link></Nav.Link>
                :
                <Nav.Link><Link className="link" to="/login"><FontAwesomeIcon icon={faUser}/> Login</Link></Nav.Link>
            }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default NavbarManu