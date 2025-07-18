import React, {useState} from 'react';
import Todo from '../models/todo';

type TodosContextType = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextType>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<{children : any}> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    }

    const contextValue: TodosContextType = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    )
}

export { TodosContext, TodosContextProvider };
