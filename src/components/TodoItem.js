import React, { useRef } from "react";
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

  &:active {
    color: #ced4da;
  }
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

  &:hover {
    ${TodoItemButtonBox} {
      opacity: 1;
    }
  }
`;

const TodoItemTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  &::after {
    content: "";
    width: 0%;
    height: 1px;
    background: red;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    transition: 0.6s;
  }
  &.remove {
    &::after {
      width: 100%;
    }
  }
`;

const TodoItemContentBox = styled.p`
  overflow: hidden;
  transition: 0.7s;
  margin: 0 80px 0 50px;
  text-align: left;
  word-break: break-all;
  max-height: 0px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.accordion &&
    css`
      max-height: 150px;
      background: rgba(0, 0, 0, 0.1);
      color: #495057;
    `}
`;
function TodoItem({ id, done, title, content, accordion }) {
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
  const onRemove = (e) => {
    const itemSelect = e.currentTarget.parentNode.parentNode;
    itemSelect.classList.add("remove");
    console.log(itemSelect);
    setTimeout(() => {
      dispatch({
        type: "REMOVE",
        id,
      });
    }, 700);

    if (open) {
      setOpen(!open);
    }
  };

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
  const onAccordion = (e) => {
    dispatch({
      type: "ACCORDION",
      id,
    });
  };
  return (
    <TodoItemList>
      <TodoItemTitleBox>
        <TodoItemStyleBox>
          {/* checkBox를 꾸미기위해 Label 사용 */}
          <TodoItemCheckBox done={done}>
            <input type="checkbox" id={`todo--item-checkbox${id}`} />
            <label htmlFor={`todo--item-checkbox${id}`} onClick={onToggle}>
              {done && <MdDone />}
            </label>
          </TodoItemCheckBox>
          <TodoItemText done={done} onClick={onAccordion}>
            {title}
          </TodoItemText>
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
      </TodoItemTitleBox>
      <TodoItemContentBox accordion={accordion} autoFocus>
        {content}
      </TodoItemContentBox>
    </TodoItemList>
  );
}

export default React.memo(TodoItem);
