import React, { Component } from 'react';
import {getPost, loadSubList} from '../action/redditAction';
import {connect} from 'react-redux';
import '../css/Home.css';
import SubListContainer from './SubListContainer';

class Home extends Component {

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
    return (
        <div id="HomeContainer" className="container">
            <div className="row">
              <div id="divOne" className="col-4">
                <SubListContainer/>
              </div>
              <div id="divTwo" className="col-8">
              </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  subRlist: state.subRList,
  selectedSub: state.selectedSub
});

export default connect(
    mapStateToProps
)(Home);