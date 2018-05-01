import React, { Component } from 'react';
import '../css/Login.css';
import Logo from '../assets/logo.png';

class Login extends Component {

  constructor() {
    super();

    this.redditConnect = this.redditConnect.bind(this);
  }

  redditConnect() {
    window.location.href = "https://www.reddit.com/api/v1/authorize?client_id=CK4802_CV5d3kw&response_type=code&state=bernard&redirect_uri=http://127.0.0.1:3000/authorize_callback&duration=permanent&scope=identity mysubreddits";
  }

  render() {
    return (
        <div id="mainContainer" className="container">
          <div className="row">
            <div className="col-12">
              <div id="imgContainer">
                <img src={Logo} alt="logo"/>
              </div>
            </div>
            <div id="titleContainer" className="col-12">
              <span>My Reddit App</span>
            </div>
            <div id="buttonContainer" className="col-12">
              <button onClick={() => this.redditConnect()}>Reddit Connect</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;