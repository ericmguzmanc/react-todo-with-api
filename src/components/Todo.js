import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Container, CardBody, Spinner, Col, ListGroup, CardFooter, Button } from 'reactstrap';
import TodoItem from './TodoItem';
import { fetchTodos } from '../store/actions/todoActions';

class Todo extends PureComponent {
  
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {



    return(
      <Fragment>
        <Container className="">
          {/* <Col xs="8"> */}
            <Card style={{borderRadius: "15px", minHeight: "18rem", width: "28rem", margin: "0 auto", marginTop:"5%", }} >
              <span className="text-center" style={{fontWeight: "bold", fontSize: "1.4rem", marginTop: "5%"}}>
                Todo App
              </span>
              <CardBody>
                <ListGroup>

                {
                  this.props.todos.map((todo, index) => (
                    <TodoItem key={index} todo={{title:todo.title, description: todo.description, index: index}}/>
                  ))

                }
                </ListGroup>
              </CardBody>
              <CardFooter className="text-right">
                <Button outline color="secondary">➕ Add</Button>
              </CardFooter>
            </Card>
          {/* </Col> */}
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