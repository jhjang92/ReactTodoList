import React from "react";
import TodoTemplate from "./components/TodoTempleate";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      {/* 부모인 body 접근 후 css 적용 */}
      <GlobalStyle />
      {/* logo, nav 등 */}
      <TodoHead />
      {/* main 컨텐츠 */}
      <TodoTemplate>
        <TodoList></TodoList>
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
