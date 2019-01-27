import {
  CREATE_TODO, DELETE_TODO, RECEIVE_TODOS,
  REQUEST_TODOS, UPDATE_TODO
} from '../../util/constants/action.constants';
import TodoService from '../../util/services/todo.service';

export function requestTodos() {
  return {
    type: REQUEST_TODOS
  }
}

export function receiveTodos(payload) {
  return {
    type: RECEIVE_TODOS,
    payload: payload
  }
}

export function createTodo(payload) {
  return {
    type: CREATE_TODO,
    payload: payload
  }
}

export function updateTodo(payload) {
  return {
    type: UPDATE_TODO,
    payload: payload
  }
}

export function deleteTodo(payload) {
  return {
    type: DELETE_TODO,
    payload: payload
  }
}

export function fetchTodos() {
  return dispatch => {
    dispatch(requestTodos());
    TodoService.getTodos()
      .then((res) => {
        dispatch(receiveTodos(res));
      });
  }
}
