import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm({ onSubmit, initialData }) {
  const [name, setName] = useState(initialData?.name || '');
  const [position, setPosition] = useState(initialData?.position || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, position });
    setName('');
    setPosition('');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={e => setPosition(e.target.value)}
        required
      />
      <button type="submit">{initialData ? 'Update' : 'Add'} Employee</button>
    </form>
  );
}

export default EmployeeForm;
