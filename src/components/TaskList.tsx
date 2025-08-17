import React, { useState } from 'react';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
    toast.success('Завдання додано!');
  };

  const toggleComplete = (id: number) => {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
    toast.warning('Завдання видалено!');
  };

  return (
    <div>
      <TaskInput addTask={addTask} />
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          {...task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default TaskList;
