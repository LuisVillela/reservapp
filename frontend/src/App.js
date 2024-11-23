import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa todas las páginas
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Agenda from './pages/Agenda';
import Torneos from './pages/Torneos';
import Torneo from './pages/Torneo';
import Cancha from './pages/Cancha';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />

        {/* Registro y Login */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Perfil del usuario */}
        <Route path="/profile/:userId" element={<Profile />} />


        {/* Agenda de canchas */}
        <Route path="/agenda" element={<Agenda />} />

        {/* Torneos */}
        <Route path="/torneos" element={<Torneos />} />
        <Route path="/torneos/:id" element={<Torneo />} /> {/* Vista específica de un torneo */}

        {/* Canchas */}
        <Route path="/cancha/:id" element={<Cancha />} /> {/* Vista específica de una cancha */}

        {/* Configuración */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
