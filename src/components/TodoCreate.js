import React from "react";
import styled from "styled-components";

// 추가&수정 버튼 , 할일추가버튼 CSS 작업 해야합니다.
const TodoCreateInsertUpdateForm = styled.form`
  margin-left: 15px;
  display: flex;
  justify-content: space-around;
`;
const TodoCreateInputBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const TodoCreateTitleInput = styled.input`
  width: 90%;
  height: 30px;
`;
const TodoCreateContentInput = styled.input`
  width: 90%;
  height: 30px;
`;
function TodoCreate() {
  return (
    <div>
      {/* insert , Update 공용으로 쓸 수 있게 변경하기. */}
      <TodoCreateInsertUpdateForm>
        <TodoCreateInputBox>
          <TodoCreateTitleInput type="text" placeholder="제목을 입력해주세요" />
          <TodoCreateContentInput
            type="text"
            placeholder="내용을 입력해주세요"
          />
        </TodoCreateInputBox>
        <button type="button">추가&수정</button>
      </TodoCreateInsertUpdateForm>
      <button type="button">할일 추가하기</button>
    </div>
  );
}

export default TodoCreate;
