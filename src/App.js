import TodoTemplate from "./component/TodoTemplate.js";

import { createGlobalStyle } from "styled-components";
import useFetch from "./utill/useFetch.js";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  const { todo, isPending, error } = useFetch("http://localhost:3001/todo");

  return (
    <>
      <GlobalStyle />
      <TodoTemplate todo={todo} />
    </>
  );
}

export default App;
