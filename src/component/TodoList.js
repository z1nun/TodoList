import React from "react";
import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";
import styled from "styled-components";
const ListStyle = styled.div`
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  margin-top: -250px;
`;

const TodoList = (props) => {
  console.log(`list`, props.todo);
  return (
    <ListStyle>
      <div>
        <TodoCreate />
        {props.todo &&
          props.todo.map((el) => <TodoItem key={el.id} todo={el} />)}
      </div>
    </ListStyle>
  );
};

export default TodoList;
