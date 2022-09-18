import React, { Component } from 'react'
import NavbarManu from '../NavbarManu/NavbarManu';
class Login extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            password:''
        }
    }
    login = () => {
        // console.log('state=>',this.state)
        fetch(`http://localhost:3000/login?q=${this.state.name}`).then((data)=>{
          data.json().then((resp)=> {
            console.log('resp=>',resp)
            if(resp.length>0){
                // localStorage k undr save karwa raha ho login data 
                localStorage.setItem('loginData',JSON.stringify(resp))
                // console.log('props=>',this.props.history.push('/list'))
                window.location.replace("http://localhost:3001/list")
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
        <NavbarManu/>
        <h1>Login Compo</h1> 
        <input type="text" onChange={(text)=>this.setState({name:text.target.value})} placeholder='Name' /> <br /> <br />
        <input type="text" onChange={(text)=>this.setState({password:text.target.value})} placeholder='Password' />  <br /> <br />
         <button onClick={()=> this.login()}>Login</button>
      </div>
    )
  }
}
export default Login