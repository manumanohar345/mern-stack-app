
import React from 'react';
import './EmployeeList.css';

function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="employee-list">
      <h3>Employee List</h3>
      {employees && employees.length > 0 ? (
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp._id || emp.id}>
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>
                  <button onClick={() => onEdit(emp)}>Edit</button>
                  <button onClick={() => onDelete(emp._id || emp.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ padding: '1rem', color: '#888' }}>No employees found.</div>
      )}
    </div>
  );
}

export default EmployeeList;
