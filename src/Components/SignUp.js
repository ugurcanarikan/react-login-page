import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from "axios";

export default class SignUp extends Component { 
  constructor(props){
    super(props);
    this.state = {
      status: 0
    };
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignUp(e){
    e.preventDefault();
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    var payload = {
      username: username,
      email: email,
      password: password
    };
    var data = new FormData();
    data.append("json", JSON.stringify(payload))
    var header = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
    await axios.post("/signup", payload).then(res => {
      this.setState({status: res.data.statusCode});
    }).catch(err => {
      console.error(err);
    })
    console.log(this.state.status);
  }

  render () {   
    return (
      <div>
        <form class="login-form" >
          <p class="login-text">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-lock fa-stack-1x"></i>
            </span>
          </p>
          <input type="username" class="login-username" autofocus="true"  placeholder="Username" ref="username"/>
          <input type="email" class="login-username" autofocus="true"  placeholder="Email" ref="email"/>
          <input type="password" class="login-password"  placeholder="Password" ref="password"/>
          <input onClick={this.handleSignUp} type="submit" name="Sign Up" value="Sign Up" class="login-submit" />
        </form>
        {(()=>{
          switch(this.state.status){
            case 1:
              return <p style={{color:"green"}}>Success creating new user!</p>;
            case 2:
              return <p style={{color:"red"}}>Username already exists!</p>;
            case 3:
              return <p style={{color:"red"}}>Failure creating new user!</p>;
            default:
              return;
          }
        })}
        <div class="underlay-photo"></div>
        <div class="underlay-black"></div> 
      </div>
    )
  }
}