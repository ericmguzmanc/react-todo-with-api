import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'; 
import { ListGroupItem, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles/TodoItem.css';
import { addTodo, putTodo } from '../store/actions/todoActions';


class TodoForm extends PureComponent {

  state = {
    _id: 0,
    title: "",
    description: ""
  }

  componentDidMount() {

    const { todoId, todos } = this.props;

    if (todoId != null) {
      const editTodoIndex = todos.findIndex((td) => td._id === todoId);
      const editTodo = todos[editTodoIndex];
      
      this.setState({
        _id: editTodo._id,
        title: editTodo.title,
        description: editTodo.description
      });
    }
  } 

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id !== 0) {
      this.props.putTodo(this.state);
    } else {
      this.props.addTodo(this.state);
    }

    this.props.closeFunc();
  }

  render() {
    return(
      <Fragment>
        <ListGroupItem style={{borderRadius:"15px", marginBottom:"10px"}}>
          <Row className="float-right">
            <div style={{marginTop: "-8px"}}>
              <FontAwesomeIcon icon={faWindowClose} className="mr-1 todo-item-button" onClick={this.props.closeFunc} color="red" style={{borderRadius: "15px"}}/>
            </div>
          </Row>
          <Row style={{marginTop:"20px"}}>
            <Col>
              <Form>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">Title</Label>
                  <Input type="text" name="title" id="todoTitle" placeholder="Todo Title" value={this.state.title} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup className="mt-3 mb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">Description</Label>
                  <Input type="textarea" name="description" id="todoDescription" placeholder="Todo description" value={this.state.description} onChange={this.handleChange}/>
                </FormGroup>
                <div className="float-right">
                  <Button 
                    style={{marginTop:"10px"}}  
                    color="success" 
                    outline 
                    onClick={this.handleSubmit}>Submit</Button>
                </div>
              </Form>
            </Col>
          </Row>

        </ListGroupItem>
      </Fragment>
    );
  }
}


const mapStateToProps = ({ todos }) => {
  return {
    todos
  }
}

export default connect(mapStateToProps, { addTodo, putTodo })(TodoForm);