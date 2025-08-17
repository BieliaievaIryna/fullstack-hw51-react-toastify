import React from 'react';
import TaskList from './components/TaskList';
import IdleReminder from './components/IdleReminder';

const App: React.FC = () => (
  <div className="App">
    <h1>Панель завдань користувача</h1>
    <TaskList />
    <IdleReminder />
  </div>
);

export default App;
