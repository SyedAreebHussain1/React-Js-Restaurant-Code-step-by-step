import React, { Component } from 'react'
import './search.css'
class RestaurantSearch extends Component {
  constructor(){
    super();
    this.state = {
      searchData:null,
      noData:false
    }
  }
  render() {
    const search = (e) => {
      // console.log(key)
      fetch(`http://localhost:3000/restaurant?q=${e}`).then((data)=>{
        data.json().then((resp)=> {
          console.log('data=>',resp)
          
          resp.length>0? this.setState({searchData:resp,noData:false})  : this.setState({noData:true,searchData:null})
        })
      })
    }
    return (
      <div>
       <h1>Restaurant Search</h1> 
       <input onChange={(text)=>search(text.target.value)} type="text" placeholder='Search' />
      
      <div>
        {
          this.state.searchData?
          <div>
            {
              this.state.searchData.map((v,i)=>{
                return(
                  <p className='search-row' key={i}>{v.name}</p>
                )
              })
            }
          </div>
          :
          ""
        }
        {
          this.state.noData? <h4>No Data Found</h4>:null
        }
      </div>
      </div>
    )
  }
}
export default RestaurantSearch