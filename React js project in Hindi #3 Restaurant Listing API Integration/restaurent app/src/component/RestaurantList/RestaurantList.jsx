import React, { Component } from "react";
import './list.css'
class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    // fetch promise return karta ha
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        console.log("result=>", result);
        this.setState({list:result})
      });
    });
  }
  render() {
    console.log("list=>",this.state)
    let {list} = this.state
    return (
      <div>
        <h1>Restaurant List</h1>
        {
          this.state.list?
          <div>
            {
              list.map((v,i)=>{
                return(
                  <div className="list-wrapper" key={i}>
                   <span>{v.name}</span> 
                   <span>{v.email}</span> 
                   <span>{v.rating}</span> 
                   <span>{v.address}</span> 
                  
                  </div>
                )
              })
            }
          </div>
          :
          <p>Please wait...</p>
        }
      </div>
    );
  }
}
export default RestaurantList;
