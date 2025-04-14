import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { TodoContextType, Todo, StatusType } from '../types/types';

// API URL
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// creating context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);

      if(!response.ok) {
        throw new Error(`Network error: ${ response.status }`);
      };

      const data: Todo[] = await response.json();
      const limitedData: Todo[] = data.slice(0, 20);

      setTodos(limitedData);
    } catch (error: unknown) {
      if(error instanceof Error) setError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [setTodos]);

  // function to handle add todo
  const addTodo = (todo: Todo): void => {
    setTodos(prev => [...prev, todo]);
  };

  // function to handle update todo
  const updateTodo = (id: number, task: string, status: string): void => {
    const index = todos?.findIndex(todo => todo?.id === id);
    todos[index] = {
      id: id,
      title: task,
      completed: status === StatusType.Done
    };
  };
  
  // function to handle delete task
  const deleteTodo = (id: number): void => {
    setTodos(prev => prev.filter(todo => todo?.id !== id));
  };

  const param = {
    error,
    isLoading,
    todos,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  };

  // returning the context values to all component
  return (
    <TodoContext.Provider value={ param }>
      { children }
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('Use within a TodoProvider');
  }
  return context;
};
