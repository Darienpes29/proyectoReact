// src/components/TodoItem.tsx

import React from 'react';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{completed ? 'Completed' : 'Not Completed'}</p>
    </div>
  );
};

export default TodoItem;
    
