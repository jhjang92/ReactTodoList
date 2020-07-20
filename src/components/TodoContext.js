import React, { createContext, useContext, useState } from "react";

const TodoOpenContext = createContext();

export function TodoProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <TodoOpenContext.Provider value={[open, setOpen]}>
      {children}
    </TodoOpenContext.Provider>
  );
}

export function useTodoOpenState() {
  const context = useContext(TodoOpenContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
}
