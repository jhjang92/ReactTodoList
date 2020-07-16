import React from "react";
import styled from "styled-components";

const TodoTemplateBox = styled.div``;

function TodoTemplate({ children }) {
  return <TodoTemplateBox className="wrapper">{children}</TodoTemplateBox>;
}

export default TodoTemplate;
