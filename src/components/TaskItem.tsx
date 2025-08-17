import React from 'react';
import { FaRegCircle, FaCheckCircle, FaCheck, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface TaskItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, text, completed, toggleComplete, deleteTask }) => {

  const handleToggle = () => {
    toggleComplete(id);
    if (!completed) toast.success('Завдання виконано!');
  };

  return (
    <div className="task-item">
      <span onClick={handleToggle} className="icon-btn">
        {completed ? <FaCheckCircle color="green" /> : <FaRegCircle />}
      </span>
      <span className={`task-text ${completed ? 'completed' : ''}`}>{text}</span>
      <span
        onClick={() => {
          if (!completed) deleteTask(id);
          else toast.info('Завдання вже виконано!');
        }}
        className="icon-btn"
      >
        {completed ? <FaCheck color="green" /> : <FaTrash color="red" />}
      </span>
    </div>
  );
};

export default TaskItem;
