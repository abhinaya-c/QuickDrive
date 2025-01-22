// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';

const Layout = () => {
  return (
    <div className='dark:bg-dark dark:text-white'>
      <Navbar />
      <main>
        <Outlet />  {/* This renders the component based on the current route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
