import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todoS: 
    [
        {
            id: 1,
            todo: "Todo Msg",
            complete: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deletedTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
};

export const TodoProvider = TodoContext.Provider