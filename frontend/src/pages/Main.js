import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      {/* Texto de bienvenida */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to ReservApp!</h1>
      <p className="text-gray-600 mb-10 text-center">
        Manage your reservations, tournaments, and profile in one place.
      </p>

      {/* Botones */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/register')}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-md shadow hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-md shadow hover:bg-gray-400 transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Main;
