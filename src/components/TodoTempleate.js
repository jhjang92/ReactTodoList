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
`;

function TodoTemplate({ children }) {
  return (
    <TodoTemplateMain>
      {/* js내장함수 현재시간 추출 후 대체하기. */}
      <header>
        <h2>2020년 07월 16일</h2>
        <strong>목요일</strong>
        <p>남은 할 일 2 개 입니다.</p>
      </header>
      {children}
    </TodoTemplateMain>
  );
}

export default TodoTemplate;
