import useFetch from "../utill/useFetch";
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="일정을 추가해주세요."
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
};

export default TodoCreate;
