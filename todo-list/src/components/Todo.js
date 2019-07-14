import React, { Component } from 'react';
import classNames from 'classnames';

class Todo extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.onItemClick = this.onItemClick.bind(this)
  // }
  // onItemClick() {
  //
  // }

  render() {
    const { item, key, onClick } = this.props;

    return(
      <div onClick={onClick} className={classNames('item', { done: item.state})}>
        <div className="state">
          {item.state ? <img src="https://image.flaticon.com/icons/svg/190/190411.svg"/> : <img src="https://image.flaticon.com/icons/svg/52/52284.svg"/>}

        </div>
        <p className="work">{item.work}</p>
        <p className="duedate">{item.duedate}</p>
      </div>
    )
  }
}

export default Todo;
