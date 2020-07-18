import React from "react";
import styled from "styled-components";

const TodoHeader = styled.header`
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  font-size: 0;
  overflow: hidden;
`;

function TodoHead() {
  return (
    <TodoHeader>
      <h1>TodoList - React</h1>
    </TodoHeader>
  );
}

export default TodoHead;
