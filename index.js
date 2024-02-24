const express = require('express');
require('dotenv').config();
const cors = require('cors'); 
const app = express();
const Routes = require('./src/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const corsOptions = {
  origin: process.env.ORIGIN,
  methods: 'GET',
  credentials: true, 
};

app.use(cors(corsOptions));
app.use('/api', Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});