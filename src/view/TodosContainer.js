import React, { Component } from "react";
import TodosController from "../controllers/TodosController";
import TodoItem from "./TodoItem";

class TodosContainer extends Component {
  render() {
    return (
      <TodosController as="ul">
        {({ todos, onClick }) =>
          todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onClick={onClick(todo)} />
          ))
        }
      </TodosController>
    );
  }
}

export default TodosContainer;
