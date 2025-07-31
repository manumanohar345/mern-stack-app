import React, { useState } from 'react';

function InventoryForm({ onSubmit, initialData }) {
  const [name, setName] = useState(initialData?.name || '');
  const [quantity, setQuantity] = useState(initialData?.quantity || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, quantity });
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        required
      />
      <button type="submit">{initialData ? 'Update' : 'Add'} Item</button>
    </form>
  );
}

export default InventoryForm;
