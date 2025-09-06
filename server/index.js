// server/index.js
// Pornirea serverului TCP

const { startServer } = require('./socketServer');

const PORT = 4000;

startServer(PORT);
