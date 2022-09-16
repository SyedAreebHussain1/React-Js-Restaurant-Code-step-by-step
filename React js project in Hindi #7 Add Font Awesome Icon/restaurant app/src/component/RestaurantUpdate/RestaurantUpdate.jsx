import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantUpdate = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [rating, setRating] = useState(null);
  // var [id,setId] = useState(null)
  const [body, setBody] = useState({
    name: null,
    email: null,
    address: null,
    rating: null,
    // id:null
  });
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/restaurant/${id}`).then((response) => {
      response.json().then((result) => {
        console.log("result=>", result);
        setBody({
          name: result.name,
          email: result.email,
          address: result.address,
          rating: result.rating,
          id: result.id,
        });
      });
    });
  }, []);
  const Update = () => {
    fetch(`http://localhost:3000/restaurant/${id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      response.json().then((result) => {
        // console.log("result==>", result);
        alert(`${result.name} has been Updated`);
      });
    });
  };
  // console.log("RestaurantUpdate props=>", id);
  // console.log(name)
  return (
    <div>
      <h1>Restaurant Update</h1>
      <div>
        <input
          value={body.name}
          onChange={(text) => setBody({ ...body, name: text.target.value })}
          placeholder="Restaurant Name"
          type="text"
        />
        <br />
        <br />
        <input
          value={body.email}
          onChange={(text) => setBody({ ...body, email: text.target.value })}
          placeholder="Restaurant Email"
          type="text"
        />
        <br />
        <br />
        <input
          value={body.rating}
          onChange={(text) => setBody({ ...body, rating: text.target.value })}
          placeholder="Restaurant Rating"
          type="text"
        />
        <br />
        <br />
        <input
          value={body.address}
          onChange={(text) => setBody({ ...body, address: text.target.value })}
          placeholder="Restaurant Address"
          type="text"
        />
        <br />
        <br />
        <button onClick={Update}> Edit Restaurant</button>
      </div>
    </div>
  );
};

export default RestaurantUpdate;
