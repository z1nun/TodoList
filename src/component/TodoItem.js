import React from "react";

const TodoItem = (props) => {
  console.log(props.todo);
  return (
    <div>
      {props.todo && props.todo.map((el) => <li key={el.id}>{el.title}</li>)}
    </div>
  );
};
export default TodoItem;
