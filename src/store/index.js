import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import todoReducer from './reducers/todoReducer';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [ thunkMiddleware, loggerMiddleware ];

const store = createStore(
  todoReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;