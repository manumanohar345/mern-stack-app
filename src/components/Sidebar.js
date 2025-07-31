import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/employees">Employee Management</Link></li>
          <li><Link to="/inventory">Inventory Management</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
