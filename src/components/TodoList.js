import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListArticle = styled.article`
  h3 {
  }
  ul {
  }
  li {
  }
`;

function TodoList() {
  return (
    <TodoListArticle>
      <h3>TodoList 목록</h3>
      <ul>
        {/* 목록이 생겼을때 .map 사용하여 반복출력 및 값세팅 */}
        <TodoItem text={"기술면접 풀이하기"} />
        <TodoItem text={"알고리즘 풀이하"} />
        <TodoItem text={"React 자습하기"} />
      </ul>
    </TodoListArticle>
  );
}

export default TodoList;
