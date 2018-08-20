import React, { Component, Fragment } from "react";
import TodosController from "../controllers/TodosController";
import TodoItem from "./TodoItem";

class TodosContainer extends Component {
  state = {
    todoInput: ""
  };

  updateTodoInputValue = value => this.setState({ todoInput: value });

  onTodoInputChange = e => {
    this.updateTodoInputValue(e.target.value);
  };

  onTodoCreate = onCreateCallback => () => {
    const todoItem = {
      id: Math.random() * 1000000,
      label: this.state.todoInput
    };

    onCreateCallback(todoItem);

    this.updateTodoInputValue("");
  };

  render() {
    const { todoInput } = this.state;

    return (
      <TodosController as="ul">
        {({ todos, onClick, onCreate }) => {
          return (
            <Fragment>
              {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onClick={onClick(todo)} />
              ))}

              <input
                type="text"
                value={todoInput}
                onChange={this.onTodoInputChange}
              />

              <button onClick={this.onTodoCreate(onCreate)}>Create</button>
            </Fragment>
          );
        }}
      </TodosController>
    );
  }
}

export default TodosContainer;
