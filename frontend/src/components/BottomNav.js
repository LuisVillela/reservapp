import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, CalendarDaysIcon, TrophyIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white fixed bottom-0 left-0 w-full border-t border-gray-300 py-3 px-4">
      <div className="flex justify-around py-2">
        {/* Profile */}
        <button
          onClick={() => navigate('/profile')}
          className="flex flex-col items-center text-gray-700 hover:text-blue-500"
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-sm">Profile</span>
        </button>

        {/* Agenda */}
        <button
          onClick={() => navigate('/agenda')}
          className="flex flex-col items-center text-gray-700 hover:text-blue-500"
        >
          <CalendarDaysIcon className="h-6 w-6" />
          <span className="text-sm">Agenda</span>
        </button>

        {/* Torneos */}
        <button
          onClick={() => navigate('/torneos')}
          className="flex flex-col items-center text-gray-700 hover:text-blue-500"
        >
          <TrophyIcon className="h-6 w-6" />
          <span className="text-sm">Torneos</span>
        </button>

        {/* Settings */}
        <button
          onClick={() => navigate('/settings')}
          className="flex flex-col items-center text-gray-700 hover:text-blue-500"
        >
          <Cog6ToothIcon className="h-6 w-6" />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
