import {
  CREATE_TODO, DELETE_TODO, RECEIVE_TODOS,
  REQUEST_TODOS, UPDATE_TODO, TODOID_FOR_EDIT
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

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id: id
  }
}

export function setTodoIdForEdit(id) {
  console.log('got in setTodoIdForEdit', id )
  return {
    type: TODOID_FOR_EDIT,
    id: id
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

export function addTodo(payload) {
  return dispatch => {
    console.log('addTodo payload, ', payload)
    TodoService.postTodo(payload)
      .then((res) => {
        dispatch(createTodo(res.data));
      });
  }
}

export function removeTodo(id) {
  return dispatch => {
    TodoService.deleteTodo(Number(id))
      .then((res) => {
        dispatch(deleteTodo(id))
      });
  }
}

export function putTodo(payload) {
  return dispatch => {
    TodoService.updateTodo(payload)
      .then((res) => {
        dispatch(updateTodo(payload))
      });
  }
}