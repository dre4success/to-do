import {VIEW_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASk} from '../actions/types';

// const INITIAL_STATE = []
export default function(state=[], action) {
  // console.log(action)
  switch(action.type) {
    case VIEW_TASKS:
    return action.payload
    case CREATE_TASK:
      return [...state, action.payload]  
    case UPDATE_TASK:
      return action.payload
    case DELETE_TASk:
      return action.payload
    default:
      return state
  }
}