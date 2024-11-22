import React from 'react';
import BottomNav from '../components/BottomNav';

const Settings = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10 py-4 px-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-2">Settings Page</h1>
      </header>

      {/* Contenido central */}
      <div className="flex flex-grow items-center justify-center p-4 text-center mt-16">
        <h2 className="text-xl font-semibold text-gray-700">Welcome to ReservApp!</h2>
      </div>

      {/* Barra de navegación inferior */}
      <BottomNav />
    </div>
  );
};

export default Settings;
