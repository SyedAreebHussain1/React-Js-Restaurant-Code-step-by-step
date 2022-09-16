import React, { Component } from "react";
import "./list.css";
import { Table } from "react-bootstrap";
import {  Link } from "react-router-dom";
// FontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCoffee, faPenToSquare,faMagnifyingGlass, faTrash} from '@fortawesome/free-solid-svg-icons'


class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData()
  
  }
  getData = () => {
      // fetch promise return karta ha
      fetch("http://localhost:3000/restaurant").then((response) => {
        response.json().then((result) => {
          console.log("result=>", result);
          this.setState({ list: result });
        });
      });
  }
   deleteRes = (ide)=> {
    fetch(`http://localhost:3000/restaurant/${ide}`,
      {
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(this.state),
      }).then((response) => {
        response.json().then((result) => {
          console.log("result==>", result);
          alert(`Restaurant has been Deleted`);
          this.getData()
        });
      });
  }
  render() {
    // console.log("list=>", this.state);
    let { list } = this.state;
    return (
      <div>
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Location</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {list.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td>{v.id}</td>
                      <td>{v.name}</td>
                      <td>{v.rating}</td>
                      <td>{v.address}</td>
                      <td><Link to={"/update/"+v.id}><FontAwesomeIcon color="orange" icon={faPenToSquare} /> </Link>
                      <span onClick={()=>this.deleteRes(v.id)}><FontAwesomeIcon color="red" icon={faTrash} /></span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please wait...</p>
        )}
      </div>
    );
  }
}
export default RestaurantList;
