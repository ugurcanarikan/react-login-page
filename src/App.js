import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home.js';
import Dashboard from './Views/Dashboard.js';
import history from './History';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp.js';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route path='/signin' render={() => (
            <div className="App">
              <SignIn />
            </div>
          )}/>
          <Route path='/signup' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
