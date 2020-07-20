import React from "react";
import styled from "styled-components";

const TodoTemplateMain = styled.main`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  border-radius: 16px;

  margin: 96px auto 32px;

  display: flex;
  flex-direction: column;

  > header {
    width: 100%;
    text-align: center;
    h2 {
      span {
      }
    }
  }
`;

function TodoTemplate({ children }) {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today
    .toLocaleDateString("ko-KR", {
      weekday: "long",
    })
    .substring(0, 1);

  return (
    <TodoTemplateMain>
      {/* js내장함수 현재시간 추출 후 대체하기. */}
      <header>
        <h2>
          {dateString} (<span>{dayName}</span>)
        </h2>
      </header>
      {children}
    </TodoTemplateMain>
  );
}

export default TodoTemplate;
