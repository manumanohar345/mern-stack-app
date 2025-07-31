import React, { useState, useEffect } from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);


  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await fetch('http://localhost:5000/api/employees');
      const data = await res.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const handleAdd = async (employee) => {
    // Call backend API to add employee
    const res = await fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    });
    const data = await res.json();
    setEmployees([...employees, data]);
  };

  const handleEdit = (emp) => setEditing(emp);

  const handleUpdate = async (employee) => {
    // Call backend API to update employee
    const res = await fetch(`http://localhost:5000/api/employees/${editing.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    });
    const data = await res.json();
    setEmployees(employees.map(e => (e.id === editing.id ? data : e)));
    setEditing(null);
  };

  const handleDelete = async (id) => {
    // Call backend API to delete employee
    await fetch(`http://localhost:5000/api/employees/${id}`, { method: 'DELETE' });
    setEmployees(employees.filter(e => e.id !== id));
  };

  return (
    <div>
      <h2>Employee Management</h2>
      <EmployeeForm onSubmit={editing ? handleUpdate : handleAdd} initialData={editing} />
      <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default EmployeePage;
