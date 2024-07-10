// src/components/TodoItem.tsx

import React, { useState } from 'react';
import './TodoItem.css';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  category: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, category }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='todo-item'>
      <h5>{id}</h5>
      <h3>Task: {title}</h3>
      <p>Category: {category}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}  >
        <p className={isChecked ? 'completed' : 'not-completed'} style={{ textDecoration: isChecked ? 'line-through' : 'none' , marginRight: '5px'}}>
          {isChecked ? 'Completed' : 'Not Completed'}
        </p>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
    </div>
  );
};

export default TodoItem;
    
