
import React from 'react';

function TodoItem({ task, handleDeleteTask, handleToggleComplete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div>
        <button onClick={() => handleToggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;