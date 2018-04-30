import React, { Component } from 'react';

class SubList extends Component {
  render() {
    let subList = this.props.posts.map(item => <li>{item}</li>);
    return (
        <ul>
          {subList}
        </ul>
    );
  }
}

export default SubList;