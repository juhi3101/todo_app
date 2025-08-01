import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({ todos, onDelete, onToggle, onEdit }) {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
