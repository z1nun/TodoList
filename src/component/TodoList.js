import React from "react";

const TodoList = ({ todo }) => {
  return <div>{todo && todo.map((el) => <li key={el.id}>{el.title}</li>)}</div>;
};

export default TodoList;
