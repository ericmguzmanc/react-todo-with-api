import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'; 
import { ListGroupItem, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles/TodoItem.css';
import { addTodo, putTodo, setTodoIdForEdit } from '../store/actions/todoActions';


class TodoForm extends PureComponent {

  state = {
    _id: 0,
    title: "",
    description: ""
  }

  componentDidMount() {

    const { todos, todoIdForEdit } = this.props;
    console.log('mountend ', todoIdForEdit)

    if (todoIdForEdit !== 0) {
      const editTodoIndex = todos.findIndex((td) => td._id === todoIdForEdit);
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

    if (this.state._id !== 0) {
      this.props.putTodo(this.state);
    } else {
      this.props.addTodo({
        title: this.state.title,
        description: this.state.description
      });
    }

    this.props.closeFunc();
  }

  handleFormClose = () => {
    this.setState({
      _id: 0,
      title: '',
      description: ''
    }, () => {
      console.log('here on handleFormClose ', this.props);
      this.props.setTodoIdForEdit(0);
      this.props.closeFunc();
    });
  }

  render() {
    return(
      <Fragment>
        <ListGroupItem style={{borderRadius:"15px", marginBottom:"10px"}}>
          <Row className="float-right">
            <div style={{marginTop: "-8px"}}>
              <FontAwesomeIcon icon={faWindowClose} className="mr-1 todo-item-button" onClick={this.handleFormClose} color="red" style={{borderRadius: "15px"}}/>
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


const mapStateToProps = ({ todos, todoIdForEdit }) => {
  return {
    todos,
    todoIdForEdit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    putTodo: (payload) => dispatch(putTodo(payload)),
    setTodoIdForEdit: (id) => dispatch(setTodoIdForEdit(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);