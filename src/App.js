import React from "react";
import TodoTemplate from "./components/TodoTempleate";

function App() {
  return (
    <TodoTemplate>
      <header>
        <h1>TodoList - React</h1>
      </header>
      <main>
        <header>
          <h2>2020년 07월 16일</h2>
          <strong>목요일</strong>
          <p>남은 할 일 2 개 입니다.</p>
        </header>

        <article>
          <h3>TodoList 목록</h3>
          <ul>
            <li>기술면접 풀이하기</li>
            <li>알고리즘 풀이하기</li>
            <li>React 자습하기</li>
          </ul>
        </article>
        <div>
          <form>
            <input
              type="text"
              placeholder="할 일을 입력 후, enter를 누르세요"
            ></input>
          </form>
          <button type="button">할일 추가하기</button>
        </div>
      </main>
    </TodoTemplate>
  );
}

export default App;
