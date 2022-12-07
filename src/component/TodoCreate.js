import { fetchCreate } from "../utill/api";
import { useState } from "react";
import styled from "styled-components";
const P = styled.p`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  background-color: rgb(255, 255, 255, 0);
  border-color: rgb(255, 255, 255, 0);
  border-bottom-color: black;
  width: 400px;
  height: 40px;
`;

const TodoCreate = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title };
    fetchCreate("http://localhost:3001/todo/", data);
  };
  return (
    <div>
      <P>오늘의 일정을 적어주세요!</P>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
      </form>
    </div>
  );
};

export default TodoCreate;
