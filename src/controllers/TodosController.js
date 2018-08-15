import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class TodosController extends Component {
  onTodoItemClick = todoItem => event => {
    console.log({ todoItem, event });
  };

  render() {
    const { as: AsComponent } = this.props;
    const todos = [
      {
        id: 1,
        label: "First item"
      },
      {
        id: 2,
        label: "Second item"
      }
    ];

    const childrenProps = {
      todos,
      onClick: this.onTodoItemClick
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
