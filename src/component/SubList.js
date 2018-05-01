import React, { Component } from 'react';
import '../css/SubList.css'

class SubList extends Component {
  constructor(props) {
    super(props);

    this.clickSub = this.clickSub.bind(this);
  }

  clickSub(e) {
    let value = e.target.innerHTML;
    if (value !== this.props.selectedSub) {
      this.props.selectSub(value);
    }
  }

  render() {
    let subList = this.props.subRList.map((item, index) => (
        <li key={index} className={this.props.selectedSub === item ? 'selected' : null} onClick={this.clickSub}>{item}</li>)
    );
    return (
        <ul className="sublist-ul">
          {subList}
        </ul>
    );
  }
}

export default SubList;