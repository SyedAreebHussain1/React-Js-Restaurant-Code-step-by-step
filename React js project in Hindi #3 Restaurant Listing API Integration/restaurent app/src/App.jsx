import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import RestaurantCreate from "./component/RestaurantCreate/RestaurantCreate";
import RestaurantDetail from "./component/RestaurantDetail/RestaurantDetail";
import RestaurantSearch from "./component/RestaurantSearch/RestaurantSearch";
import RestaurantUpdate from "./component/RestaurantUpdate/RestaurantUpdate";
import RestaurantList from "./component/RestaurantList/RestaurantList";
function App() {
  return (
    <div className="App">
      <h1>React Restautrent</h1>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          <Route path="/update" element={<RestaurantUpdate />} />
          <Route path="/details" element={<RestaurantDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
