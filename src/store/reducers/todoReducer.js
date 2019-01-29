import { 
  CREATE_TODO, DELETE_TODO, RECEIVE_TODOS,
  REQUEST_TODOS, UPDATE_TODO, TODOID_FOR_EDIT
} from '../../util/constants/action.constants'

export default function todoReducer( state = {
  isLoading: false,
  todoIdForEdit: 0,
  todos: []
}, action) {
  switch(action.type) {
    case CREATE_TODO:
      console.log('create todo ', action.payload)
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload]
      });

    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => todo._id !== action.id)
      });

    case RECEIVE_TODOS:
      return Object.assign({}, state, {
        todos: [...action.payload.data]
      });

    case REQUEST_TODOS: 
      return state;

    case UPDATE_TODO: 

      const fTodos = state.todos.map((elm) => {
        if(elm._id === action.payload._id) {
          return Object.assign({}, elm, {
            _id: elm._id,
            title: action.payload.title,
            description: action.payload.description
          });
        } else {
          return elm;
        }
      })

      return Object.assign({}, state, {
        todos: [...fTodos]
      });
    
    case TODOID_FOR_EDIT:
      return Object.assign({}, state, {
        todoIdForEdit: action.id
      });

    default:
      return state;
  }
}