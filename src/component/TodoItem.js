import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TodolistStyle = styled.div`
  color: red;
`;

const TodoItem = (props) => {
  console.log(props);
  const [isCheck, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!isCheck);
  };
  return (
    <div>
      <div onClick={handleCheck}>
        {isCheck === true ? (
          <TodolistStyle>{props.todo}</TodolistStyle>
        ) : (
          props.todo
        )}
      </div>
    </div>
  );
};
export default TodoItem;
