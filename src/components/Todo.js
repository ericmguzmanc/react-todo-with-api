import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Container, CardBody, ListGroup, Button, CardHeader } from 'reactstrap';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { fetchTodos } from '../store/actions/todoActions';


class Todo extends PureComponent {
  
  state = {
    editMode: false,
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  openTodoForm = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  editTodoForm = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  }


  render() {

    return(
      <Fragment>
        <Container className="">
          <Card style={{borderRadius: "15px", minHeight: "18rem", width: "28rem", margin: "0 auto", marginTop:"5%", }} >
            <CardHeader className="text-center">
              <span className="text-center" style={{fontWeight: "bold", fontSize: "1.4rem", marginTop: "5%"}}>
                ToDo
              </span>
            </CardHeader>
            <CardBody>
              <div className="text-center" style={{marginBottom:"15px"}}>
                {
                  !this.state.editMode &&
                  <Button outline color="secondary" onClick={this.openTodoForm}>
                    <span role="img" aria-label="add emoji">➕</span>
                  </Button>
                }
              </div>
              <ListGroup>
              {
                this.state.editMode &&
                <TodoForm closeFunc={this.openTodoForm}/>
              }
              {
                !this.state.editMode &&
                this.props.todos.map((todo, index) => (
                  <TodoItem key={index} edit={this.editTodoForm} todo={{title:todo.title, description: todo.description, id: todo._id, index: index}}/>
                ))

              }
              </ListGroup>
            </CardBody>
          </Card>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    todos: state.todos
  }
}

const mapDispatchToProps = {
  fetchTodos: fetchTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);