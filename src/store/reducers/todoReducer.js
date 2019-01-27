import { 
  CREATE_TODO, DELETE_TODO, RECEIVE_TODOS,
  REQUEST_TODOS, UPDATE_TODO
} from '../../util/constants/action.constants'

export default function todoReducer( state = {
  isLoading: false,
  todos: []
}, action) {
  switch(action.type) {
    case CREATE_TODO:
      return state;

    case DELETE_TODO:
      return state;

    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        todos: [...action.payload.data]
      });

    case REQUEST_TODOS: 
      return state;

    case UPDATE_TODO: 
      return state;

    default:
      return state;
  }
}