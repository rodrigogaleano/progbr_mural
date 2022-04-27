const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
const apiRoute = require('./routes/api');

//Rotas
app.use('/api', apiRoute);
app.use('/', express.static(path.join(__dirname, 'public')));

//Listen
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});