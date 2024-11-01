const express = require('express');
const app = express();
const { connectDB } = require('../helpers/db');
const { port, host } = require('../configurations');

app.get('/', (_, res) => {
    res.redirect('test');
});

app.get('/test', (_, res) => {
    res.send('Test response working fine!');
});

connectDB()
    .on('error', console.error(console, 'connection error'))
    .on('disconnected', connectDB)
    .once('open', app.listen(PORT, (_) => {
        console.log(`Api service listening at ${host}:${port}`);
    }));