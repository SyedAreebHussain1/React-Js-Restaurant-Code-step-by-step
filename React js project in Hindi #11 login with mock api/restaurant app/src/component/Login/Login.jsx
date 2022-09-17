import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            password:''
        }
    }
    login = () => {
        console.log('state=>',this.state)
        fetch(`http://localhost:3000/login?q=${this.state.name}`).then((data)=>{
          data.json().then((resp)=> {
            console.log('resp=>',resp)
            if(resp.length>0){
                console.log('props=>',this.props.history.push('list'))
            }
            else{
                alert('Please check Username or Password')
            }
            // resp.length>0? this.setState({searchData:resp,noData:false})  : this.setState({noData:true,searchData:null})
          })
        })
    }
  render() {
    return (
      <div>
        <h1>Login Compo</h1> 
        <input type="text" onChange={(text)=>this.setState({name:text.target.value})} placeholder='Name' /> <br /> <br />
        <input type="text" onChange={(text)=>this.setState({password:text.target.value})} placeholder='Password' />  <br /> <br />
         <button onClick={()=> this.login()}>Login</button>
      </div>
    )
  }
}
export default Login