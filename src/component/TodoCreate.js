import { fetchCreate } from "../utill/api";
import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  display: flex;
  justify-content: center;
  margin: 20px auto;
  background-color: rgb(255, 255, 255, 0);
  border-color: rgb(255, 255, 255, 0);
  border-bottom-color: white;
  width: 540px;
  height: 40px;
  text-align: center;
  font-weight: 600;
  font-size: 1.25rem;
  color: white;
  text-shadow: #828282 1px 0 1px;
  outline: none;
  margin-top: -20px;
  ::placeholder {
    color: white;
    font-size: 1.25rem;
  }
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
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write a to do!"
        ></Input>
      </form>
    </div>
  );
};

export default TodoCreate;
