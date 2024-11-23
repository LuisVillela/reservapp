import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BottomNav from '../components/BottomNav';

const Agenda = () => {
  const [fields, setFields] = useState([]);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false); // Estado para el modal
  const [newField, setNewField] = useState({
    name: '',
    location: '',
    status: 'available',
    image_url: '',
  });

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const response = await axios.get('http://localhost:5001/fields');
        setFields(response.data);
      } catch (err) {
        setError('Error fetching fields');
      }
    };
  
    fetchFields();
  }, []);
  

  const handleCreateField = async () => {
    try {
      await axios.post('http://localhost:5001/fields', { ...newField, admin_id: userId });
      setModalOpen(false);
      setNewField({ name: '', location: '', status: 'available', image_url: '' });
      // Refrescar la lista de Fields
      const response = await axios.get('http://localhost:5001/fields');
      setFields(response.data);
    } catch (err) {
      setError('Error creating field');
    }
  };

  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-10 py-4 px-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 mt-2">Agenda</h1>
      </header>

      <div className="flex-grow mt-16 p-4">
        {fields.length === 0 ? (
          <p className="text-center text-gray-500">No fields available</p>
        ) : (
          <ul className="space-y-4">
            {fields.map((field) => (
              <li key={field.id} className="p-4 bg-white shadow rounded-md">
                <h3 className="text-lg font-bold text-gray-700">{field.name}</h3>
                <p className="text-gray-500">{`Location: ${field.location}`}</p>
                <p className="text-gray-500">{`Status: ${field.status}`}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-16 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
      >
        +
      </button>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Create New Field</h2>
            <input
              type="text"
              placeholder="Name"
              value={newField.name}
              onChange={(e) => setNewField({ ...newField, name: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Location"
              value={newField.location}
              onChange={(e) => setNewField({ ...newField, location: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newField.image_url}
              onChange={(e) => setNewField({ ...newField, image_url: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <select
              value={newField.status}
              onChange={(e) => setNewField({ ...newField, status: e.target.value })}
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            >
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
            </select>
            <div className="flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="mr-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateField}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav userId={userId} />
    </div>
  );
};

export default Agenda;
