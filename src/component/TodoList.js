import React from "react";
import { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = (props) => {
  return (
    <div>
      <TodoCreate />
      {props.todo &&
        props.todo.map((el) => <TodoItem key={el.id} todo={el.title} />)}
    </div>
  );
};

export default TodoList;
