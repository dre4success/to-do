import { VIEW_TASKS, CREATE_TASK, UPDATE_TASK, DELETE_TASk } from './types';
import axios from 'axios';

const url = 'http://localhost:8080';

export const taskRunner = () => async dispatch => {
  const res = await axios.get(`${url}/api/todos`);
  dispatch({ type: VIEW_TASKS, payload: res.data });
};

export const taskInput = values => async dispatch => {
  const res = await axios.post(`${url}/api/todos`, { name: values });
  dispatch({ type: CREATE_TASK, payload: res.data });
};

export const taskUpdate = (id, value) => async dispatch  => {
  await axios.put(`${url}/api/todos/${id}`, {completed: value});
  const resp = await axios.get(`${url}/api/todos`);
  dispatch({type: UPDATE_TASK, payload: resp.data})
}

export const taskDelete = (id) => async dispatch => {
        await axios.delete(`${url}/api/todos/${id}`);
  const resp = await axios.get(`${url}/api/todos`);
  dispatch({type: DELETE_TASk, payload: resp.data})
}