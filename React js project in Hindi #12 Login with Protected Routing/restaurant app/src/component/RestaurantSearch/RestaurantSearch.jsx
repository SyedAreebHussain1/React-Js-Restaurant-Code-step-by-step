import React, { Component } from 'react'
import './search.css'
// Bootstrap //
import { Table,Form,Container } from "react-bootstrap";
import {  Link } from "react-router-dom";
// FontAwesome //
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCoffee, faPenToSquare,faMagnifyingGlass, faTrash} from '@fortawesome/free-solid-svg-icons'

import NavbarManu from '../NavbarManu/NavbarManu';

class RestaurantSearch extends Component {
  constructor(){
    super();
    this.state = {
      searchData:null,
      noData:false,
      lastSearch:''
    }
  }

  deleteRes= (ide) =>{
   fetch(`http://localhost:3000/restaurant/${ide}`,
     {
       method: "DELETE",
       // headers: {
       //   "Content-Type": "application/json",
       // },
     }).then((response) => {
       response.json().then((result) => {
         console.log("result==>", result);
         alert(`Restaurant has been Deleted`);
         this.search(this.state.lastSearch)
       });
     });
    }
    search = (e) =>{
     // console.log(e)
     this.setState({lastSearch:e})
     fetch(`http://localhost:3000/restaurant?q=${e}`).then((data)=>{
       data.json().then((resp)=> {
         console.log('data=>',resp)
         resp.length>0? this.setState({searchData:resp,noData:false})  : this.setState({noData:true,searchData:null})
       })
     })
   }
  render() {
    
    return (
      <div>
      <NavbarManu/>
      <Container>
       <h1>Restaurant Search</h1> 
       <Form.Control  onChange={(text)=>this.search(text.target.value)} type="text" placeholder="Search Restaurtant" />
      <div>
        {
          this.state.searchData?
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
            {
              this.state.searchData.map((v,i)=>{
                return(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{v.name}</td>
                      <td>{v.rating}</td>
                      <td>{v.address}</td>
                      <td><Link to={"/update/"+v.id}><FontAwesomeIcon color="orange" icon={faPenToSquare} /> </Link>
                      <span onClick={()=>this.deleteRes(v.id)}><FontAwesomeIcon color="red" icon={faTrash} /></span>
                      </td>
                    </tr>
                )
              })
            }
            </tbody>
            </Table>
          </div>
          :
          ""
        }
        {
          this.state.noData? <h4>No Data Found</h4>:null
        }
      </div>
      </Container>
      </div>
    )
  }
}
export default RestaurantSearch