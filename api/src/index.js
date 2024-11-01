const express = require('express');
const app = express();

const { connectDB } = require('../helpers/db');
const { PORT, HOST } = require('../configurations');

const startServer = () => {
    app.listen(PORT, (_) => {
        console.log(`Api service listening at ${HOST}:${PORT}`);
    });
};

app.get('/', (_, res) => {
    res.redirect('test');
});

app.get('/test', (_, res) => {
    res.send('Test response working fine!');
});

connectDB()
    .on('disconnected', connectDB)
    .once('open', startServer);