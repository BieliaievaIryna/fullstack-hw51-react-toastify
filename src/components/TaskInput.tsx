import React, { useState } from 'react';

interface TaskInputProps {
  addTask: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addTask(text.trim());
      setText('');
    }
  };

  return (
    <div style={{ marginBottom: '1rem', display: 'flex' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введіть нове завдання..."
      />
      <button onClick={handleAdd}>Додати</button>
    </div>
  );
};

export default TaskInput;
