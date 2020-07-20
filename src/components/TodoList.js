import React from "react";
import styled, { css } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoOpenState } from "./TodoContext";
const TodoListArticle = styled.article`
  margin-left: 15px;
  text-align: center;
  flex: 1;
  transition: 1.2s;
  ${(props) =>
    props.open &&
    css`
      overflow-y: auto;
    `}

  h3 {
    margin: 0;
    padding-top: 10px;
  }
  > p {
    text-align: left;
  }
  ul {
  }
`;

function TodoList() {
  const [open, setOpen] = useTodoOpenState();
  return (
    <TodoListArticle open={open}>
      <h3>할일 목록</h3>
      <p>
        남은 할 일 <strong>2</strong>개 입니다.
      </p>
      <ul>
        {/* 목록이 생겼을때 .map 사용하여 반복출력 및 값세팅 */}
        <TodoItem id={1} text={"기술면접 풀이하기"} />
        <TodoItem id={2} text={"알고리즘 풀이하기"} />
        <TodoItem id={3} text={"React 자습하기"} done={true} />
        <TodoItem id={4} text={"React 자습하기"} done={true} />
        <TodoItem id={5} text={"React 자습하기"} done={true} />
        <TodoItem id={6} text={"React 자습하기"} done={true} />
        <TodoItem id={7} text={"React 자습하기"} done={true} />
        <TodoItem id={8} text={"React 자습하기"} done={true} />
        <TodoItem id={9} text={"React 자습하기"} done={true} />
      </ul>
    </TodoListArticle>
  );
}

export default TodoList;
