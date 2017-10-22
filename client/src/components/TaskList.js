import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

class TaskList extends Component {

  constructor(props) {
    super(props) 

    this.state = { done: false, completed: false}

  }

  componentDidMount() {
    this.props.taskRunner();
  }


  handleClick(id) {
    this.setState({completed: !this.state.completed})
    this.setState({done: !this.state.done});
    
    this.props.taskUpdate(id, this.state.completed);
 
  }

  deleteOne(e, id) {
    e.stopPropagation()
    this.props.taskDelete(id)
  }

 
  
  renderList() {
    // pass down to a child component
    return this.props.tasks.map(task => {
      const {_id, name} = task;
      return (
        <li
        onClick={() => this.handleClick(_id)}
        key={_id} 
        className={`task ${task.completed ? "done" : ""}`}>
        {name} 
        <span onClick={(e) => this.deleteOne(e, _id)}>X</span> </li>
        
      )
    })
  }
  render() {
    return (
      <ul className="list">
        {this.renderList()}
      </ul>
    )
  }
} 

const mapStateToProps = ({tasks}) => {
  return {tasks}
}

export default connect(mapStateToProps, actions)(TaskList);