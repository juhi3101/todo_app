import React, { useState } from 'react';

export default function ToDoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            className="border p-1 rounded"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.text}</span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600 hover:underline"
          >Save</button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:underline"
          >Edit</button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-600 hover:underline"
        >Delete</button>
      </div>
    </li>
  );
}
