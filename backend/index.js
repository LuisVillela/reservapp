const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');
const fieldRoutes = require('./routes/fieldRoutes');

app.use(cors());
app.use(bodyParser.json());

// Example
app.get('/', (req, res) => res.send('API is working!'));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/fields', fieldRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
