import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import Todo from './components/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: 0,
      todoList: [
        {
          work: 'We have to buy some food',
          state: false,
          duedate: '2019-07-14'
        }, {
          work: 'Go to downtown',
          state: true,
          duedate: '2019-07-14'
        }, {
          work: 'Fix the stairway',
          state: false,
          duedate: '2019-07-14'
        }, {
          work: 'Paint the main door',
          state: true,
          duedate: '2019-07-14'
        }, {
          work: 'Paint the window',
          state: true,
          duedate: '2019-07-14'
        }
      ]
    }
  }


  // onItemClicked = (event) => ( console.log('call'))
  onItemClicked(item) {
    return () => {
      this.setTodoItemState(item);
    }
  }

  setTodoItemState(item) {
    const { state } = item;
    const { todoList } = this.state;
    const index = todoList.indexOf(item)
    todoList.splice(index, 1, {
      ...item,
      state: !state
    })

    this.setState({
      todoList: todoList

    })
  }

  setFilter(value) {
    this.setState({
      filter: value
    })
  }

  render() {

    const filter = {
      all: 0,
      done: 1,
      pending: 2
    }



    return (<div className="App">
      <div className="container">
        <div className="header">
          TODO LIST
        </div>
        <div className="list">
          <div className="layout-main">
            {this.state.todoList.map((item, key) => {
              const component = <Todo key={key} item={item} onClick={this.onItemClicked(item)} />
              if (this.state.filter === 0) {
                return component
              }
              if (this.state.filter === 1) {
                if (item.state) {
                  return component
                }
              } else {
                if (!item.state) {
                  return component
                }
              }
              }
              )}
            <div className="action">
              <button className="btn blue-gradient">
                <i className="fas fa-plus"></i>
                New</button>
              <span></span>
              <span></span>
              <div>
                <button type="button" className="btn btn-outline-default waves-effect" onClick={() => this.setFilter(0)}>All</button>
                <button type="button" className="btn btn-outline-default waves-effect" onClick={() => this.setFilter(1)}>Done</button>
                <button type="button" className="btn btn-outline-default waves-effect" onClick={() => this.setFilter(2)}>Pending</button>
              </div>
            </div>
          </div>
          <div className="layout-1"></div>
          <div className="layout-2"></div>
        </div>
      </div>
    </div>);
  }
}

export default App;
