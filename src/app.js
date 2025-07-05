require('dotenv').config();
const express = require('express');
const translateRoutes = require('./routes/translate');

const app = express();
app.use(express.json());

app.use('/api/v1/translation', translateRoutes);

const PORT = process.env.PORT || 3027;
app.listen(PORT, () => {
  console.log(`🌐 Translation Service running on port ${PORT}`);
});
