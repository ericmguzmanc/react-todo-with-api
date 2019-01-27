import axios from 'axios';
import { API_URL } from '../constants/api.constants';

let instance = null;

class TodoService {

  constructor() {
    if(!instance) {
      instance = this;
    }

    this.apiUrl =  API_URL;
    return instance;
  }

  getTodos() {
    return axios.get(`${this.apiUrl}/todo`);
  }

}

export default new TodoService();