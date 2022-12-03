import React from "react";
import { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  console.log(props.todo);
  return (
    <div>
      <TodoCreate />
      <TodoItem todo={props.todo} />
    </div>
  );
};

export default TodoList;
