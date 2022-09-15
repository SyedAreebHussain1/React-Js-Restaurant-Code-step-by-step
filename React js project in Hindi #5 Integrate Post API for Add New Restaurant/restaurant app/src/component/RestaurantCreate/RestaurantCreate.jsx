import React, { Component } from "react";

class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
    };
  }
  createN() {
    // console.log('Create=>',this.state)
    fetch("http://localhost:3000/restaurant", {
      method: "Post",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state),
    }).then((response) => {
      response.json().then((result) => {
        // console.log("result==>", result);
        alert(`${result.name} has been added`)
        this.setState({
          name: '',
          email: '',
          address: '',
          rating: '',
        });
      });
    });
  }
  render() {
  // console.log(this.state);

    return (
      <div>
        <h1>Restaurant Create</h1>
        <div>
          <input
            onChange={(text) => this.setState({ name: text.target.value })}
            placeholder="Restaurant Name"
            value={this.state.name}
            type="text"
          />
          <br />
          <br />
          <input
            onChange={(text) => this.setState({ email: text.target.value })}
            placeholder="Restaurant Email"
            value={this.state.email}
            type="text"
          />
          <br />
          <br />
          <input
            onChange={(text) => this.setState({ rating: text.target.value })}
            placeholder="Restaurant Rating"
            value={this.state.rating}
            type="text"
          />
          <br />
          <br />
          <input
            onChange={(text) => this.setState({ address: text.target.value })}
            placeholder="Restaurant Address"
            value={this.state.address}
            type="text"
          />
          <br />
          <br />
          <button onClick={() => this.createN()}>Add Restaurant</button>
        </div>
      </div>
    );
  }
}
export default RestaurantCreate;
