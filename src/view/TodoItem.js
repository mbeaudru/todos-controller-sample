import React from "react";

function TodoItem({ todo, onClick }) {
  const { label } = todo;
  return <li onClick={onClick}>{label}</li>;
}

export default TodoItem;
