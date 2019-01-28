import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'; 
import './styles/TodoItem.css';
import { removeTodo } from '../store/actions/todoActions';
class TodoItem extends PureComponent {


  handleDelete = (id) =>  {
    this.props.removeTodo(id)
  }

  render() {

    const { todo } = this.props;

    return(
      <Fragment>
        <ListGroupItem style={{borderRadius:"15px", marginBottom:"10px"}}>
          <Row>
            <Col xs="6">
              <span>{`${todo.index + 1}.  `}</span>
              <span style={{display:"inline", fontWeight: "bold"}}>{todo.title}</span>
              <p>{todo.description} </p>
            </Col>
            <Col xs="6">
              <div className="float-right">
              {todo._id}
                <FontAwesomeIcon icon={faEdit} className="mr-1 todo-item-button" onClick={() => this.props.edit(todo.id)}/>
                <FontAwesomeIcon icon={faTrashAlt} className="mr-1 todo-item-button" onClick={() => this.handleDelete(todo.id)}/>
              </div>
            </Col>
          </Row>
        </ListGroupItem>
      </Fragment>
    );
  }
}


export default connect(null, { removeTodo })(TodoItem);