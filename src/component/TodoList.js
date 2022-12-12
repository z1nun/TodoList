import React from "react";
import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const ListStyle = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  width: 668px;
  height: 400px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.4);
  border-radius: 20px;
`;

const TodoList = (props) => {
  return (
    <div>
      <ListStyle>
        <div>
          <TodoCreate />
          {props.todo &&
            props.todo.map((el) => <TodoItem key={el.id} todo={el} />)}
        </div>
      </ListStyle>
    </div>
  );
};

export default TodoList;
