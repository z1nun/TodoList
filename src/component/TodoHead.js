import { logRoles } from "@testing-library/react";
import { fetchCreate } from "../utill/api";
const TodoHead = (props) => {
  console.log(props.quotes);

  const randomNum = Math.floor(Math.random() * 100);
  return (
    <div>
      <h1>TodoList</h1>
      {props.quotes && <div>{props.quotes[randomNum].quote}</div>}
      {props.quotes && <div>{props.quotes[randomNum].author}</div>}
    </div>
  );
};
export default TodoHead;
