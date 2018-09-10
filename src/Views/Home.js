import React, { Component } from 'react';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';
import './Home.css';
import history from '../History.js'

export default class Home extends Component { 
constructor(props){
  super(props);
  this.state = {};
    
  this.handleSignIn = this.handleSignIn.bind(this);
  this.handleSignUp = this.handleSignUp.bind(this);
}

  handleSignIn(e){
      //e.preventDefault();
      history.push("signin");
  }

  handleSignUp(e){
      //e.preventDefault();
      history.push("signup");
  }

  render () {                                   
    return (
      <div id="container">
        <form class="login-form" >
          <p class="login-text">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-lock fa-stack-1x"></i>
            </span>
          </p>
            <input type="email" class="login-username" autofocus="true"  placeholder="Email" />
            <input type="password" class="login-password"  placeholder="Password" />
            <input onClick={this.handleSignIn} type="submit" name="Sign In" value="Sign In" class="login-submit" />
            <input onClick={this.handleSignUp} type="submit" name="Sign Up" value="Sign Up" class="login-submit" />
        </form>
        <a href="#" class="login-forgot-pass">forgot password?</a>
        <div class="underlay-photo"></div>
        <div class="underlay-black"></div> 
      </div>
    )
  }
}

