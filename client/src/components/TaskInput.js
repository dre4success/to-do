import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

class TaskInput extends Component {

  constructor(props) {
    super(props) 
      this.state = {task: ''}
    
  }

  handleChange(e) {
    this.setState({task: e.target.value})
  }

  pressEnter(e) {
    if(e.key === 'Enter') {
      this.props.taskInput(this.state.task);
      this.setState({task: ''})    
    }
  }
  render() {
    return (
      <div className="form">
        <input 
        value={this.state.task}
        onChange={this.handleChange.bind(this)}
        onKeyPress={this.pressEnter.bind(this)}
        type="text" id="todoInput" placeholder="Insert your task here..." />
      </div>
    )
  }
}

export default connect(null, actions)(TaskInput);