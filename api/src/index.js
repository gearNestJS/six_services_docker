const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
    res.redirect('test');
});

app.get('/test', (_, res) => {
    res.send('Test response working fine!');
});

app.listen(PORT, (_) => {
    console.log(`Api service listening at http://localhost:${PORT}`);
})