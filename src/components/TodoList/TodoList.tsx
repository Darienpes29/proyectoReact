// src/components/TodoList.tsx

import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css'; /* Se importa el archivo css con los estilos del TodoList component */


interface Todo {
  id: number;
  title: string;
  completed: boolean;
  category: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Learn TypeScript', completed: false, category: 'Work' },
    { id: 2, title: 'Build a React App', completed: false, category: 'Work' },
  ]);

  const [newTodo, setNewTodo] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      const todo: Todo = {
        id: todos.length + 1,
        title: newTodo.trim(),
        completed: false,
        category: selectedCategory,
      };

      <button>Prueba botón</button>

      setTodos([...todos, todo]);
      setNewTodo('');
      setSelectedCategory(''); // Reiniciar la categoría seleccionada
    }
  };

  return (
    <div id='todo-list-container'>
      <h1 style={{ color: 'white' }}>Welcome to the Todo List App!</h1>
      <form onSubmit={handleAddTodo}>
        <div id='search-container'>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New Todo"
            required
          />

          <select id='category-select' onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="other">Other</option>
          </select>

          
          <button type="submit">Add Todo</button>
        </div>
        
      </form>

      <div id='task-container'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            category={todo.category}
          />
        ))}
      </div>
      
    </div>
  );
};



export default TodoList;