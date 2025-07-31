import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import '../Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
