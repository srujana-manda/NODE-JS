const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', schoolRoutes);

// Basic error handling
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });


  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
