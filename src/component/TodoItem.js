import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { fetchDelete, fetchPatch } from "../utill/api";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BsGithub, BsPencilSquare, BsDot } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const DeleteButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dee2e6;
  font-size: 17px;
  width: 82px;
  height: 26px;
  animation-name: indicate;
  animation-duration: 0.5s;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 1;
  &:hover {
    color: #ebfbff;
    text-shadow: 1px 1px 1px #ebfbff;
  }
`;

const UpdateButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #dee2e6;
  font-size: 17px;
  width: 82px;
  height: 26px;
  animation-name: indicate;
  animation-duration: 0.5s;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 1;
  &:hover {
    color: #ebfbff;
    text-shadow: 1px 1px 1px #ebfbff;
  }
`;

const TodolistStyle = styled.div`
  outline: none;
  display: flex;
  width: 518px;
  font-size: 1.25rem;
  font-weight: 700px;
  margin-left: 15px;
  color: white;
  text-shadow: #828282 1px 0 1px;
  height: 48px;
  &:hover {
    cursor: pointer;
    text-shadow: 1px 1px 1px #ebfbff;
  }
  .list {
    outline: none;
  }
  .handleClicked {
    animation-duration: 1s;
    animation-name: listclick;
    animation-fill-mode: forwards;
  }

  @keyframes listclick {
    from {
      color: white;
      text-shadow: #828282 1px 0 1px;
    }
    30% {
      text-decoration: line-through;
      text-decoration-color: #b4b4dc;
    }
    60% {
      text-decoration: line-through;
      text-decoration-color: #b4b4dc;
    }
    to {
      color: #b4b4dc;
      text-decoration: line-through;
      text-shadow: #828282 1px 0 1px;
    }
  }
`;

const ModalContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
  color: white;
  text-shadow: #828282 1px 0 1px;
  width: 130px;
  height: 48px;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
    text-shadow: 2px 2px 2px #787878;
  }
  @keyframes indicate {
    0% {
      color: #dee2e6;
      background-color: rgb(0, 0, 0);
      opacity: 0;
    }
    50% {
      color: #dee2e6;
      background-color: rgb(0, 0, 0);
      opacity: 0.5;
    }
    100% {
      color: #dee2e6;
      background-color: rgb(0, 0, 0, 0.6);
    }
  }
`;

const Totalstyle = styled.div`
  display: flex;
  justify-content: center;
  width: 768px;
  padding: 0;
`;

const TodoItem = (props) => {
  const [isClick, setClick] = useState(false);
  const [modal, setModal] = useState(false);

  //update하기위해 useRef사용해서 DOM 직접 건들기
  const $contentEditable = useRef();
  const handleClick = () => {
    setClick(!isClick);
  };
  const handleDeleteClick = () => {
    fetchDelete("http://localhost:3001/todo/", props.todo.id);
  };
  const handleUpdateClick = () => {
    $contentEditable.current.contentEditable = true;
    $contentEditable.current.focus({ cursor: "end" }); //포커스 커서를 오른쪽 끝으로 옮기고 싶다..
  };

  const PressEnter = (e) => {
    if (e.key === "Enter") {
      const updateData = { title: $contentEditable.current.innerText };

      fetchPatch("http://localhost:3001/todo/", props.todo.id, updateData);
    }
  };

  //hover했을 때 우측 더보기 버튼 클릭시 Modal창 뜨게하기
  const MdOutlineMoreHorizclick = () => {
    setModal(!modal);
  };
  console.log(modal);
  return (
    <Totalstyle>
      <TodolistStyle>
        <BsDot />
        <div
          onClick={handleClick}
          ref={$contentEditable}
          onKeyDown={PressEnter}
          className="list"
        >
          {isClick === true ? (
            <div className="handleClicked">{props.todo.title}</div>
          ) : (
            props.todo.title
          )}
        </div>
      </TodolistStyle>
      <ModalContainer>
        <MdOutlineMoreHoriz onClick={MdOutlineMoreHorizclick} />
        {modal ? (
          <div>
            <DeleteButton onClick={handleDeleteClick}>
              <RxCross1 /> 삭제하기
            </DeleteButton>
            <UpdateButton onClick={handleUpdateClick}>
              <BsPencilSquare /> 수정하기
            </UpdateButton>
          </div>
        ) : null}
      </ModalContainer>
    </Totalstyle>
  );
};
export default TodoItem;
