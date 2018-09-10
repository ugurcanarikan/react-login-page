import React, { Component } from 'react';
export default class SignUp extends Component { 
  constructor(props){
    super(props);
    this.state = {};
  }

  handleSignUp(e){

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
          <input type="username" class="login-username" autofocus="true"  placeholder="Username" />
          <input type="email" class="login-username" autofocus="true"  placeholder="Email" />
          <input type="password" class="login-password"  placeholder="Password" />
          <input onClick={this.handleSignUp} type="submit" name="Sign Up" value="Sign Up" class="login-submit" />
        </form>
        <div class="underlay-photo"></div>
        <div class="underlay-black"></div> 
      </div>
    )
  }
}