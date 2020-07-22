import React from "react";
import styled, { css, keyframes } from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoOpenState, useTodoState } from "./TodoContext";

const fadeIn = keyframes`
from {
  overflow-y: unset;
}
to {
  overflow-y: auto;
}
`;
const fadeOut = keyframes`
from {
  overflow-y: auto;
}
to {
  overflow-y: unset;
}
`;
const TodoListArticle = styled.article`
  margin-left: 15px;
  text-align: center;
  flex: 1;
  transition: 1.2s;

  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;

  ${(props) =>
    props.open &&
    css`
      animation-name: ${fadeIn};
    `}

  h3 {
    width: 1px;
    height: 1px;
    overflow: hidden;
    font-size: 0;
  }
  > p {
    text-align: left;
  }
  ul {
  }
`;

function TodoList() {
  const [open] = useTodoOpenState();
  const todos = useTodoState();
  const countTodo = todos.filter((todo) => !todo.done).length;
  return (
    <TodoListArticle open={open}>
      <h3>할일 목록</h3>
      <p>
        남은 할 일 <strong>{countTodo}</strong>개 입니다.
      </p>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            content={todo.content}
            done={todo.done}
          />
        ))}
      </ul>
    </TodoListArticle>
  );
}

export default TodoList;
