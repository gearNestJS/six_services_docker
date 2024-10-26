const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/test', (_, res) => {
    res.send('Test response working fine!');
});

app.listen(PORT, () => {
    console.log(`Api listening at http://localhost:${PORT}`);
})