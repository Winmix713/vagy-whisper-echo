
import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Dashboard from './Dashboard';

const Index = () => {
  return (
    <div className="flex h-screen bg-liga-background text-liga-text">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
