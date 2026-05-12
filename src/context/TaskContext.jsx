import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Carrega tarefas
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Salva tarefas
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
    };

    setTasks([...tasks, newTask]);
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(id, newTitle) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}