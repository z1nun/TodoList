import { fetchCreate } from "../utill/api";
import { useState } from "react";

const TodoCreate = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title };
    fetchCreate("http://localhost:3001/todo/", data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="일정을 입력해주세요."
      ></input>
      <button>submit</button>
    </form>
  );
};

export default TodoCreate;
