import React from "react";
import TodoList from "./TodoList.js";
import TodoHead from "./TodoHead.js";
import styled from "styled-components";
import { useState } from "react";
import Road from "../background/Road.jpg";
import LakeMorain from "../background/LakeMorain.jpg";
import mountain from "../background/mountain.jpg";
import { BsGithub } from "react-icons/bs";

const TodoBackground = styled.div`
  background-image: url(${LakeMorain});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
`;

const Todotemplateblock = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: "Noto Sans Korean";
`;

const Aboutblock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 70px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Aboutme2 = styled.div`
  color: white;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  height: 40px;
`;

const Mygit = styled.button`
  position: relative;
  color: white;
  margin-top: 20px;
  display: flex;
  margin-left: auto;
  align-items: center;
  height: 40px;
  background-color: rgb(0, 0, 0, 0);
  border: rgb(0, 0, 0, 0);
  font-size: 1.7rem;
  &:hover {
    cursor: pointer;
    animation: bigger 1s 1s infinite;
  }

  @keyframes bigger {
    0% {
      font-size: 1.7rem;
    }
    50% {
      font-size: 2rem;
    }
    100% {
      font-size: 1.7rem;
    }
  }
`;

const Slidein = styled.div`
  animation-name: slidein;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  @keyframes slidein {
    from {
      font-size: 1rem;
      border-radius: 25px;
      background-color: rgb(0, 0, 0, 0.4);
      box-shadow: #828282 1px 1px 10px;
      width: 90px;
      height: 40px;
    }
    to {
      font-size: 1rem;
      border-radius: 25px;
      background-color: rgb(0, 0, 0, 0.4);
      box-shadow: #828282 1px 1px 10px;
      width: 150px;
      height: 40px;
    }
  }
`;

const Slideout = styled.div`
  animation-name: slideout;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  @keyframes slideout {
    from {
      width: 150px;
      height: 40px;
      font-size: 1rem;
      border-radius: 25px;
      background-color: rgb(0, 0, 0, 0.4);
      box-shadow: #828282 1px 1px 10px;
    }
    to {
      width: 90px;
      height: 40px;
      font-size: 1rem;
      border-radius: 25px;
      background-color: rgb(0, 0, 0, 0.4);
      box-shadow: #828282 1px 1px 10px;
    }
  }
`;

//props로 children
const TodoTemplate = (props) => {
  const [isabout, setAbout] = useState(false);

  const handleClickaboud = () => {
    setAbout(!isabout);
  };

  const navitogithub = () => {
    window.location.href = "https://github.com/z1nun/TodoList";
  };
  return (
    <TodoBackground>
      <Aboutblock>
        <div onClick={handleClickaboud}>
          {isabout ? (
            <Slidein>
              <Mygit>
                <BsGithub onClick={navitogithub} className="git" />
              </Mygit>
            </Slidein>
          ) : (
            <Slideout>
              <Aboutme2>About Me!</Aboutme2>
            </Slideout>
          )}
        </div>
      </Aboutblock>
      <Todotemplateblock>
        <TodoHead quotes={props.quotes} />
        <TodoList todo={props.todo} />
      </Todotemplateblock>
    </TodoBackground>
  );
};

export default TodoTemplate;
