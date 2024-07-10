import React, { useState } from 'react'; // Importa React y useState desde React
import './TodoItem.css'; // Importa el archivo de estilos TodoItem.css

interface TodoItemProps {
  id: number; // Propiedad: ID de la tarea
  title: string; // Propiedad: título de la tarea
  completed: boolean; // Propiedad: estado de completado de la tarea
  category: string; // Propiedad: categoría de la tarea
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, category }) => {
  const [isChecked, setIsChecked] = useState(completed); // Estado local para el estado de completado de la tarea

  // Función para manejar el cambio de checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Cambia el estado de completado al contrario del estado actual
  };

  return (
    <div className='todo-item'> {/* Contenedor principal del ítem de la tarea */}
      <h5>{id}</h5> {/* ID de la tarea */}
      <h3>Task: {title}</h3> {/* Título de la tarea */}
      <p>Category: {category}</p> {/* Categoría de la tarea */}
      <div style={{ display: 'flex', justifyContent: 'center' }}  > {/* Contenedor para alinear elementos horizontalmente */}
        <p className={isChecked ? 'completed' : 'not-completed'} style={{ textDecoration: isChecked ? 'line-through' : 'none' , marginRight: '5px'}}> {/* Texto de estado de completado */}
          {isChecked ? 'Completed' : 'Not Completed'}
        </p>
          <input
            type="checkbox"
            checked={isChecked} // Estado del checkbox
            onChange={handleCheckboxChange} // Manejador de cambio del checkbox
          />
      </div>
    </div>
  );
};

export default TodoItem; // Exporta el componente TodoItem para su uso en otras partes de la aplicación
    
