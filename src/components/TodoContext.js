import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useRef,
} from "react";

const initialTodos = [
  {
    id: 1,
    title: "프로젝트 생성하기",
    content: "첫 시작은 설치부터!",
    done: true,
    accordion: true,
  },
  {
    id: 2,
    title: "투두리스트 만들기",
    content: "벨로퍼트님의 패스트캠퍼스 영상 및 개정판 책 참고하여 개발",
    done: true,
    accordion: false,
  },
  {
    id: 3,
    title: "UseState",
    content:
      "특정 값들을 직접적인 변경대신 상태관리 훅을 통해 불변성을 지키며 작성",
    done: true,
    accordion: false,
  },
  {
    id: 4,
    title: "useContext",
    content:
      "값들을 여러 컴포넌트에서 가져다 쓰기 쉽도록 별도 파일로 분리하여 작성",
    done: true,
    accordion: false,
  },
  {
    id: 5,
    title: "useReducer",
    content:
      "useContext와 사용하기 좋았으며, 다른 컴포넌트에서 dispatch(action) 하여 해당내용 실행",
    done: true,
    accordion: false,
  },
  {
    id: 6,
    title: "useRef",
    content: "Dom의 태그 선택, 렌더링은 필요없는 값들을 담을때 사용",
    done: true,
    accordion: false,
  },
  {
    id: 7,
    title: "styled-component",
    content:
      "style 을 각 컴포넌트내에서 사용하며, 변수를 사용하여 값에따른 변화 적용",
    done: true,
    accordion: false,
  },
  {
    id: 8,
    title: "useEffect",
    content:
      "아직 한번도 사용해보지 않아서 다음 프로젝트때 공부하여 적용시킬 예정",
    done: false,
    accordion: false,
  },
  {
    id: 9,
    title: "useCallback",
    content: "다음 프로젝트때 공부하여 적용해볼 예정",
    done: false,
    accordion: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.todo.id
          ? {
              ...todo,
              title: action.todo.title,
              content: action.todo.content,
            }
          : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "ACCORDION":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, accordion: !todo.accordion } : todo
      );
    default:
      throw new Error(`Unhadled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoOpenContext = createContext();
const TodoNextIdContext = createContext();
const TodoTypeContext = createContext();
const TodoInputsContext = createContext();
const TodoSelectedContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const [open, setOpen] = useState(false);
  const nextId = useRef(10);
  const [type, setType] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const [selected, setSelected] = useState(0);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoOpenContext.Provider value={[open, setOpen]}>
          <TodoNextIdContext.Provider value={nextId}>
            <TodoTypeContext.Provider value={[type, setType]}>
              <TodoInputsContext.Provider value={[inputs, setInputs]}>
                <TodoSelectedContext.Provider value={[selected, setSelected]}>
                  {children}
                </TodoSelectedContext.Provider>
              </TodoInputsContext.Provider>
            </TodoTypeContext.Provider>
          </TodoNextIdContext.Provider>
        </TodoOpenContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoOpenState() {
  const context = useContext(TodoOpenContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoType() {
  const context = useContext(TodoTypeContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoInputs() {
  const context = useContext(TodoInputsContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
export function useTodoSelected() {
  const context = useContext(TodoSelectedContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
