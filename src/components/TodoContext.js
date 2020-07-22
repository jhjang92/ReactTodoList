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
    done: true,
  },
  {
    id: 2,
    title: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 3,
    title: "프로젝트 생성하기",
    done: false,
  },
  {
    id: 4,
    title: "프로젝트 생성하기",
    done: false,
  },
  {
    id: 5,
    title: "프로젝트 생성하기",
    done: false,
  },
  {
    id: 6,
    title: "프로젝트 생성하기",
    done: false,
  },
  {
    id: 7,
    title: "프로젝트 생성하기",
    done: false,
  },
  {
    id: 8,
    title: "프로젝트 생성하기",
    done: false,
  },
  {
    id: 9,
    title: "프로젝트 생성하기",
    done: false,
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
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhadled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoOpenContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const [open, setOpen] = useState(false);
  const nextId = useRef(10);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoOpenContext.Provider value={[open, setOpen]}>
          <TodoNextIdContext.Provider value={nextId}>
            {children}
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
