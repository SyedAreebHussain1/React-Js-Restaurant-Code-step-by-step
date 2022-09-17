import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import RestaurantCreate from "./component/RestaurantCreate/RestaurantCreate";
import RestaurantDetail from "./component/RestaurantDetail/RestaurantDetail";
import RestaurantSearch from "./component/RestaurantSearch/RestaurantSearch";
import RestaurantUpdate from "./component/RestaurantUpdate/RestaurantUpdate";
import RestaurantList from "./component/RestaurantList/RestaurantList";
import { Nav, Navbar } from "react-bootstrap";
import { createBrowserHistory } from 'history';
// FontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList,faHouse, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      {/* <h1>React Restaurant</h1> */}
      <Router>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link className="link" to="/"><FontAwesomeIcon icon={faHouse}/> Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/list"><FontAwesomeIcon icon={faList}/> List</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/create"><FontAwesomeIcon icon={faPlus}/> Create</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/search"><FontAwesomeIcon icon={faMagnifyingGlass}/> Search</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route exact path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/update/:id" element={<RestaurantUpdate />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
