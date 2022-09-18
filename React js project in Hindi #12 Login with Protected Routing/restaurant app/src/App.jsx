import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./component/Home/Home";
import RestaurantCreate from "./component/RestaurantCreate/RestaurantCreate";
import RestaurantDetail from "./component/RestaurantDetail/RestaurantDetail";
import RestaurantSearch from "./component/RestaurantSearch/RestaurantSearch";
import RestaurantUpdate from "./component/RestaurantUpdate/RestaurantUpdate";
import RestaurantList from "./component/RestaurantList/RestaurantList";
import Login from "./component/Login/Login";
import Logout from "./component/Logout/Logout";
import { createBrowserHistory } from "history";
// import NavbarManu from "./component/NavbarManu/NavbarManu";
// import Protected from "./component/Protected/Protected";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      {/* <h1>React Restaurant</h1> */}

      {/* Protected Routing */}
      <Router>
        {localStorage.getItem("loginData") ? (
          <Routes>
            <Route exact path="/list" element={<RestaurantList />} />
            <Route path="/create" element={<RestaurantCreate />} />
            <Route path="/search" element={<RestaurantSearch />} />
            <Route path="/update/:id" element={<RestaurantUpdate />} />
            <Route path="/login" element={<Login history={history} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login history={history} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}
export default App;
