import React, { useState } from 'react';
import InventoryList from '../components/InventoryList';
import InventoryForm from '../components/InventoryForm';

function InventoryPage() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  // Fetch items from backend (to be implemented)

  const handleAdd = async (item) => {
    // Call backend API to add item
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    const data = await res.json();
    setItems([...items, data]);
  };

  const handleEdit = (item) => setEditing(item);

  const handleUpdate = async (item) => {
    // Call backend API to update item
    const res = await fetch(`/api/items/${editing.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    const data = await res.json();
    setItems(items.map(i => (i.id === editing.id ? data : i)));
    setEditing(null);
  };

  const handleDelete = async (id) => {
    // Call backend API to delete item
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      <InventoryForm onSubmit={editing ? handleUpdate : handleAdd} initialData={editing} />
      <InventoryList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default InventoryPage;
