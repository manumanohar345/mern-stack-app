import React from 'react';

function InventoryList({ items, onEdit, onDelete }) {
  return (
    <div>
      <h3>Inventory List</h3>
      <ul>
        {items && items.length > 0 ? (
          items.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity}
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No items found.</li>
        )}
      </ul>
    </div>
  );
}

export default InventoryList;
