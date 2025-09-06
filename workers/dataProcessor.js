// workers/dataProcessor.js
// Worker thread pentru procesarea datelor

const { parentPort } = require('worker_threads');

parentPort.on('message', (msg) => {
    // Simulare procesare: transformare la majuscule
    const result = msg.toUpperCase();
    parentPort.postMessage(result);
});
