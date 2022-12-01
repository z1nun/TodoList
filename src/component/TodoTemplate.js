import React from "react";
import styled from "styled-components";

const Todotemplateblock = styled.div`
  width: 512px;
  height: 768px;
  background-color: white;

  position: relative;
  border-radius: 16px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  margin-top: 200;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

//props로 children
const TodoTemplate = ({ children }) => {
  return <Todotemplateblock>{children}</Todotemplateblock>;
};

export default TodoTemplate;
