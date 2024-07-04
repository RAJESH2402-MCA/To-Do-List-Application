import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, handleDeleteTask, handleToggleComplete }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;