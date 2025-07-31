import React from 'react';

function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div>
      <h3>Employee List</h3>
      <ul>
        {employees && employees.length > 0 ? (
          employees.map(emp => (
            <li key={emp.id}>
              {emp.name} - {emp.position}
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button onClick={() => onDelete(emp.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No employees found.</li>
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
