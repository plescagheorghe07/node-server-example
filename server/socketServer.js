// server/socketServer.js
// Logica serverului TCP cu procesare multithread

const net = require('net');
const path = require('path');
const { Worker } = require('worker_threads');

function processData(data, callback) {
    const worker = new Worker(path.join(__dirname, '../workers/dataProcessor.js'));
    worker.on('message', (result) => {
        callback(result);
        worker.terminate();
    });
    worker.postMessage(data.toString());
}

function startServer(PORT) {
    const server = net.createServer((socket) => {
        console.log('Client conectat:', socket.remoteAddress, socket.remotePort);

        socket.on('data', (data) => {
            console.log('Date primite:', data.toString());
            processData(data, (result) => {
                socket.write(`Răspuns: ${result}`);
            });
        });

        socket.on('end', () => {
            console.log('Client deconectat');
        });

        socket.on('error', (err) => {
            console.error('Eroare socket:', err);
        });
    });

    server.listen(PORT, () => {
        console.log(`Serverul rulează pe portul ${PORT}`);
    });
}

module.exports = { startServer };
