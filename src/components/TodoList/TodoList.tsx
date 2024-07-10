// src/components/TodoList.tsx

import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem'; // Se importa el componente TodoItem para mostrar cada ítem de la lista de tareas
import './TodoList.css'; // Se importa el archivo css con los estilos del componente TodoList
import { Button, Dropdown, Space, Menu, MenuProps } from 'antd'; // Se importan componentes de Ant Design para botón, menú desplegable y espacio entre elementos
import { MenuInfo } from 'rc-menu/lib/interface'; // Se importa la interfaz MenuInfo de rc-menu para tipado

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  category: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    // { id: 1, title: 'Learn TypeScript', completed: false, category: 'Work' },
    // { id: 2, title: 'Build a React App', completed: false, category: 'Work' },
  ]); // Estado para almacenar la lista de tareas, inicialmente vacía

  const [newTodo, setNewTodo] = useState<string>(''); // Estado para el nuevo título de la tarea a agregar
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Estado para la categoría seleccionada en el menú desplegable

  // Función para manejar el clic en el menú desplegable y actualizar la categoría seleccionada
  const handleMenuClick = (e: MenuInfo) => {
    setSelectedCategory(e.key as string);
  };

  // Configuración del menú desplegable con opciones de categoría
  const menu: MenuProps['items'] = [
    { key: 'work', label: 'Work' },
    { key: 'personal', label: 'Personal' },
    { key: 'other', label: 'Other' },
  ];

  // Función para manejar el envío del formulario para agregar una nueva tarea
  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      const category = selectedCategory !== '' ? selectedCategory : 'None'; // Verificar si la categoría está seleccionada
      const todo: Todo = {
        id: todos.length + 1,
        title: newTodo.trim(),
        completed: false,
        category: category,
      };

      setTodos([...todos, todo]); // Agregar la nueva tarea a la lista de tareas
      setNewTodo(''); // Limpiar el campo de entrada de nueva tarea
      setSelectedCategory(''); // Reiniciar la categoría seleccionada
    }
  };

  return (
    <div id='todo-list-container'>
      <h1 style={{ color: 'white' }}>Welcome to the Todo List App!</h1> {/* Título principal de la aplicación */}
      <form onSubmit={handleAddTodo}>
        <div id='search-container'>
          <input
            className='txtSearch'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New Todo"
            required
          /> {/* Campo de entrada para el nuevo título de la tarea */}

          <Space className="category-dropdown">
            {/* Menú desplegable para seleccionar la categoría de la tarea */}
            <Dropdown menu={{ items: menu, onClick: handleMenuClick }} trigger={['click']}>
              <Button className="ant-btn">{selectedCategory || 'Category...'}</Button>
            </Dropdown>
          </Space>

          <button className='add-button' type="submit" id='add-button'>Add Todo</button> {/* Botón para agregar una nueva tarea */}
        </div>
      </form>

      <div id='task-container'>
        {/* Renderizado de cada ítem de tarea utilizando el componente TodoItem */}
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

export default TodoList; // Exportación del componente TodoList para su uso en otras partes de la aplicación
