

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import EmployeePage from './features/employee-management/pages/EmployeePage';
import InventoryPage from './features/inventory-management/pages/InventoryPage';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<div>Welcome to the Dashboard</div>} />
                    <Route path="/employees" element={<EmployeePage />} />
                    <Route path="/inventory" element={<InventoryPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
