import { 
  CREATE_TODO, DELETE_TODO, RECEIVE_TODOS,
  REQUEST_TODOS, UPDATE_TODO, SET_EDIT_MODE
} from '../../util/constants/action.constants'

export default function todoReducer( state = {
  isLoading: false,
  todos: []
}, action) {
  switch(action.type) {
    case CREATE_TODO:
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

      console.log('payload ', action.payload);

      const editTodoIndex = state.todos.findIndex((td) => td._id === action.payload._id);
      const editTodo = state.todos[editTodoIndex];
      const todos = state.todos.filter((td) => td._id !== editTodo._id)

      const fTodos = state.todos.map((elm) => {
        if(elm._id === editTodo._id) {
          console.log('action ', action.payload)
          return Object.assign({}, elm, {
            _id: elm._id,
            title: action.payload.title,
            description: action.payload.description
          });
        } else {
          return elm;
        }
      })

      console.log('ftodos ', fTodos)

      return Object.assign({}, state, {
        todos: [...fTodos]
      });

    case SET_EDIT_MODE:
      return Object.assign({}, state, {

      });

    default:
      return state;
  }
}