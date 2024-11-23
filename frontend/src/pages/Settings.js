import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Settings = () => {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    localStorage.removeItem('userId'); // Limpiar el localStorage
    navigate('/'); // Redirigir a la página principal
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10 py-4 px-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-2">Settings Page</h1>
      </header>

      {/* Contenido central */}
      <div className="flex flex-grow items-center justify-center p-4 text-center mt-16">
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome to ReservApp!</h2>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Barra de navegación inferior */}
      <BottomNav />
    </div>
  );
};

export default Settings;
