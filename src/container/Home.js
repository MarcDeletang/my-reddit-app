import React, { Component } from 'react';
import {getPost, loadSubList} from '../action/redditAction';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.subRList === undefined && this.props.selectedSub === null) {
      this.props.dispatch(loadSubList());
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSub !== prevProps.selectedSub) {
      this.props.dispatch(getPost(this.props.selectedSub));
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  subRlist: state.subRList,
  selectedSub: state.selectedSub
});

export default connect(
    mapStateToProps
)(Home);