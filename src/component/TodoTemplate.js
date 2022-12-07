import React from "react";
import TodoList from "./TodoList.js";
import TodoHead from "./TodoHead.js";
import styled from "styled-components";

const TodoBackground = styled.div`
  background-image: url("http://windowskorea.com/files/attach/images/848/045/041/39f847b0d8aa11ec3a4137399fa7e448.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
`;

const Todotemplateblock = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

//props로 children
const TodoTemplate = (props) => {
  console.log(`template`, props.todo);
  return (
    <TodoBackground>
      <Todotemplateblock>
        <TodoHead quotes={props.quotes} />
        <TodoList todo={props.todo} />
      </Todotemplateblock>
    </TodoBackground>
  );
};

export default TodoTemplate;
