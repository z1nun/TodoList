import TodoTemplate from "./component/TodoTemplate.js";

import useFetch from "./utill/useFetch.js";
import "./App.css";

function App() {
  const { data: todo } = useFetch("http://localhost:3001/todo");
  const { data: quotes } = useFetch("http://localhost:3001/quotes");

  const $input = document.getElementById("gsc-i-id1");
  $input && $input.setAttribute("placeholder", "Google 검색");

  return (
    <>
      <TodoTemplate todo={todo} quotes={quotes} />
    </>
  );
}

export default App;
