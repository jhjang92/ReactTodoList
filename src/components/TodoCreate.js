import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import {
  useTodoOpenState,
  useTodoDispatch,
  useTodoNextId,
  useTodoType,
  useTodoInputs,
  useTodoSelected,
} from "./TodoContext";

// 추가&수정 버튼 , 할일추가버튼 CSS 작업 해야합니다.
const TodoCreateBox = styled.div`
  overflow: hidden;
`;
const TodoCreateInsertUpdateForm = styled.form`
  padding: 10px 10px 50px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #dee2e6;
  border-radius: 10px;
  transition: 0.6s ease-in-out;
  transform: translateY(100%);
  ${(props) =>
    props.open &&
    css`
      transform: translateY(0%);
    `}
`;
const TodoCreateInputBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const TodoCreateTitleInput = styled.input`
  height: 50px;
  box-sizing: border-box;
`;
const TodoCreateContentInput = styled.textarea`
  margin-top: 10px;
  height: 100px;
  box-sizing: border-box;
`;
const TodoCreateAddUdateButton = styled.button`
  width: 100px;
  height: 70px;
  margin: 0 10px;
  border: 1px solid black;
  border-radius: 7px;
  box-sizing: border-box;
  background: #1f9bc4;
  color: white;
  &:hover {
    background: #2567ad;
  }
  &:active {
    background: #1f44c4;
  }
`;
const TodoCreateButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 70px;
  height: 70px;
  font-size: 60px;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  transition: 0.2s;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate() {
  console.log("TodoCreate");
  const [open, setOpen] = useTodoOpenState();
  const [type, setType] = useTodoType();
  const [inputs, setInputs] = useTodoInputs();
  const nextId = useTodoNextId();
  const dispatch = useTodoDispatch();
  const [submitName, setSubmitName] = useState("Add");
  const [selected, setSelected] = useTodoSelected();

  const { title, content } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onToggle = () => {
    setOpen(!open);
    setType("CREATE");
    setInputs({
      title: "",
      content: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (type === "CREATE") {
      setSubmitName("Add");
      dispatch({
        type: type,
        todo: {
          id: nextId.current,
          title: title,
          content: content,
          done: false,
        },
      });
      nextId.current += 1;
    } else if (type === "UPDATE") {
      dispatch({
        type: type,
        todo: {
          id: selected,
          title: title,
          content: content,
        },
      });
    }

    setInputs({
      title: "",
      content: "",
    });
    setOpen(false);
    setType("");
  };
  return (
    <TodoCreateBox>
      <TodoCreateInsertUpdateForm open={open} onSubmit={onSubmit}>
        <TodoCreateInputBox>
          <TodoCreateTitleInput
            type="text"
            placeholder="제목을 입력해주세요"
            name={"title"}
            value={title}
            onChange={onChange}
          />
          <TodoCreateContentInput
            type="text"
            placeholder="내용을 입력해주세요"
            name={"content"}
            value={content}
            onChange={onChange}
          />
        </TodoCreateInputBox>
        <TodoCreateAddUdateButton type="submit">
          {submitName}
        </TodoCreateAddUdateButton>
      </TodoCreateInsertUpdateForm>

      <TodoCreateButton name="Add" type="button" onClick={onToggle} open={open}>
        <MdAdd />
      </TodoCreateButton>
    </TodoCreateBox>
  );
}

export default React.memo(TodoCreate);
