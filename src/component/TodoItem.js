import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { fetchDelete, fetchPatch } from "../utill/api";
import { MdDone, MdDelete } from "react-icons/md";

const TodolistStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  padding: 10px;
`;

const HandleTodoClick = styled.div`
  display: flex;
  justify-content: center;

  font-size: 1.25rem;
  padding: 10px;
  color: grey;
  text-decoration: line-through;
`;

const TodoItem = (props) => {
  const [isCheck, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!isCheck);
  };
  const handleDeleteClick = () => {
    /* delete 버튼을 누르면 다시 home으로 리다이렉트 되어야 합니다. */
    /* useNavigate()를 이용하여 로직을 작성해주세요. */
    fetchDelete("http://localhost:3001/todo/", props.todo.id);
  };
  console.log(props.id);
  return (
    <TodolistStyle>
      <div onClick={handleCheck}>
        {isCheck === true ? (
          <HandleTodoClick>{props.todo.title}</HandleTodoClick>
        ) : (
          props.todo.title
        )}
        <MdDelete onClick={handleDeleteClick} />
      </div>
    </TodolistStyle>
  );
};
export default TodoItem;
