import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccessToken } from '../action/redditAction';
import {Redirect} from 'react-router-dom';

class RedditCallBackContainer extends Component {

  constructor() {
    super();

    this.state = {redirectHome: false};
  }

  componentDidMount() {
    let parser = document.createElement('a');
    parser.href = window.location.href;
    let argArray = parser.search.substring(1).split('&').map((argline) => argline.split('=')[1]);

    if (argArray[0] === 'bernard') {
      this.props.dispatch(getAccessToken(argArray[1])).then(() => {
        this.setState({
          redirectHome: true
        })
      });
    }
  }

  render () {
    if (this.state.redirectHome) {
      return (
          <Redirect to='/home' />
      );
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(
    null,
    mapDispatchToProps
)(RedditCallBackContainer);
