import React from 'react';
import { Outlet } from 'react-router';
import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

export default function Root() {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
