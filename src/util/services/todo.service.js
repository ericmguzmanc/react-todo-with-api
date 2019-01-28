import axios from 'axios';
import { API_URL } from '../constants/api.constants';

let instance = null;

class TodoService {

  constructor() {
    if(!instance) {
      instance = this;
    }

    this.apiUrl =  `${API_URL}/todo`;
    return instance;
  }

  getTodos() {
    return axios.get(this.apiUrl);
  }

  postTodo(payload) {
    return axios.post(this.apiUrl, payload);
  }

  updateTodo(payload) {
    return axios.put(this.apiUrl, payload);
  }

  deleteTodo(id) {
    return axios.delete(this.apiUrl, { data: { "_id": id } } );
  }

}

export default new TodoService();