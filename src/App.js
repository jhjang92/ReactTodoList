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
  ul, ol {list-style:none;}
  ul,ol,li,button{margin:0; padding:0;}
  button {border:none; background:none; outline-style:none; cursor:pointer;}

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
