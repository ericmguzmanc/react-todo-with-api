import React, { Fragment, PureComponent } from 'react';
import { ListGroupItem, Col, ButtonGroup, Button, Row } from 'reactstrap';
 
class TodoItem extends PureComponent {


  render() {

    console.log(this.props)
    const { todo } = this.props;

    return(
      <Fragment>
        <ListGroupItem>
          <Row>
            <Col xs="6">
              <span>{`${todo.index + 1}.  `}</span>
              <span style={{display:"inline", fontWeight: "bold"}}>{todo.title}</span>
              <p>{todo.description} </p>
            </Col>
            <Col xs="4" >
              <ButtonGroup>
                <Button outline color="primary">One</Button>
                <Button outline color="primary">Three</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </ListGroupItem>
      </Fragment>
    );
  }
}

export default TodoItem;