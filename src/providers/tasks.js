import { createContext, useReducer } from 'react';
import tasks from '../components/data/tasks';

const initialState = {
  tasks: localStorage.getItem('tasks') || tasks,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
