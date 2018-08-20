import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class TodosController extends Component {
  state = {
    todos: [
      {
        id: 1,
        label: "First item"
      },
      {
        id: 2,
        label: "Second item"
      }
    ]
  };

  onTodoItemClick = todoItem => event => {
    const todosState = this.state.todos;
    this.setState({ todos: todosState.filter(({ id }) => id !== todoItem.id) });
  };

  onTodoItemCreate = todoItem => {
    const todosState = this.state.todos;
    this.setState({ todos: [...todosState, todoItem] });
  };

  render() {
    const { as: AsComponent } = this.props;
    const { todos } = this.state;

    const childrenProps = {
      todos,
      onClick: this.onTodoItemClick,
      onCreate: this.onTodoItemCreate
    };

    return <AsComponent>{this.props.children(childrenProps)}</AsComponent>;
  }
}

TodosController.propTypes = {
  children: PropTypes.func.isRequired,
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

TodosController.defaultProps = {
  as: Fragment
};

export default TodosController;
