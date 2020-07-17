import React from "react";

function TodoCreate() {
  return (
    <div>
      {/* insert , Update 공용으로 쓸 수 있게 변경하기. */}
      <form>
        <input
          type="text"
          placeholder="할 일을 입력 후, enter를 누르세요"
        ></input>
      </form>
      <button type="button">할일 추가하기</button>
    </div>
  );
}

export default TodoCreate;
