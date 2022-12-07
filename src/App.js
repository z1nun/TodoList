import TodoTemplate from "./component/TodoTemplate.js";

import { createGlobalStyle } from "styled-components";
import useFetch from "./utill/useFetch.js";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #e9ecef;
  /* position: relative; */
  }

`;

function App() {
  const { data: todo } = useFetch("http://localhost:3001/todo");
  const { data: quotes } = useFetch("http://localhost:3001/quotes");

  return (
    <>
      <GlobalStyle />
      <TodoTemplate todo={todo} quotes={quotes} />
    </>
  );
}

export default App;
