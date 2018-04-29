import React, { Component } from 'react';

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
        <button onClick={() => this.redditConnect()}>Reddit Connect</button>
    );
  }
}

export default Login;