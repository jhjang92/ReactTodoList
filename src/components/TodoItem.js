import React from "react";
import styled, { css } from "styled-components";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import {
  useTodoDispatch,
  useTodoType,
  useTodoOpenState,
  useTodoInputs,
  useTodoSelected,
} from "./TodoContext";

const TodoItemStyleBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const TodoItemCheckBox = styled.div`
  > input {
    display: none;
  }
  > label {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    border: 1px solid #ced4da;
    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${(props) =>
      props.done &&
      css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
      `}
  }
`;
const TodoItemText = styled.button`
  margin-left: 15px;
  font-size: 20px;
  color: #495057;

  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const TodoItemButtonBox = styled.div`
  opacity: 0;
  padding-right: 20px;
`;
const TodoItemUpdate = styled.button`
  align-items: center;
  font-size: 24px;
  margin-left: 10px;
  &:hover {
    color: #38d9a9;
  }
`;
const TodoItemRemove = styled.button`
  align-items: center;
  font-size: 24px;
  margin-left: 10px;
  &:hover {
    color: #fa5252;
  }
`;
const TodoItemList = styled.li`
  padding: 10px 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &:hover {
    ${TodoItemButtonBox} {
      opacity: 1;
    }
  }
`;
function TodoItem({ id, done, title, content }) {
  // styled 및 체크,수정,삭제 아이콘 추가하기.
  const dispatch = useTodoDispatch();
  const [open, setOpen] = useTodoOpenState();
  const [type, setType] = useTodoType();
  const [inputs, setInputs] = useTodoInputs();
  const [selected, setSelected] = useTodoSelected();

  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });
  const onUpdate = (e) => {
    setOpen(!open);
    setType("UPDATE");
    setSelected(id);
    setTimeout(() => {
      if (open === true) {
        setOpen(open);
      }
    }, 400);
    setInputs({
      ...inputs,
      title: title,
      content: content,
    });
  };
  return (
    <TodoItemList>
      <TodoItemStyleBox>
        {/* checkBox를 꾸미기위해 Label 사용 */}
        <TodoItemCheckBox done={done}>
          <input type="checkbox" id={`todo--item-checkbox${id}`} />
          <label htmlFor={`todo--item-checkbox${id}`} onClick={onToggle}>
            {done && <MdDone />}
          </label>
        </TodoItemCheckBox>
        <TodoItemText done={done}>{title}</TodoItemText>
      </TodoItemStyleBox>

      {/* update, Remove Button */}
      <TodoItemButtonBox>
        <TodoItemUpdate onClick={onUpdate}>
          <AiFillEdit />
        </TodoItemUpdate>
        <TodoItemRemove onClick={onRemove}>
          <RiDeleteBin6Line />
        </TodoItemRemove>
      </TodoItemButtonBox>
    </TodoItemList>
  );
}

export default TodoItem;
