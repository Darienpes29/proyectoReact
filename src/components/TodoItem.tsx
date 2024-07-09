// src/components/TodoItem.tsx

import React, { useState } from 'react';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <h5>{id}</h5>
      <h3>{title}</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}  >
          <p style={{ textDecoration: isChecked ? 'line-through' : 'none' , marginRight: '5px'}}>
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
    
