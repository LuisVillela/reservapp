import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const Profile = () => {
  const { userId } = useParams(); // Extraer el userId desde la URL
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        setError('Error fetching user data');
      }
    };

    if (userId) fetchUserData(); // Evitar ejecutar si userId es undefined
  }, [userId]);

  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

  if (!userData) {
    return <div className="text-center text-gray-500 mt-20">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10 py-4 px-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-2">Profile Page</h1>
      </header>

      <div className="flex flex-grow items-center justify-center p-4 text-center mt-16">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">{`Welcome, ${userData.username}!`}</h2>
          <p className="text-gray-600">{`Team: ${userData.team || 'No team assigned'}`}</p>
          <p className="text-gray-600">{`Player Number: ${userData.number || 'No number assigned'}`}</p>
          <p className="text-gray-600">{`About Me: ${userData.about_me || 'No description provided'}`}</p>
        </div>
      </div>

      {/* Pasar el userId como prop */}
      <BottomNav userId={userId} />
    </div>
  );
};

export default Profile;
