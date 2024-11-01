const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { connectDB } = require('../helpers/db');
const { PORT, HOST } = require('../configurations');

const postSchema = new mongoose.Schema({
    name: String
});

const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(PORT, (_) => {
        console.log(`Api service listening at ${HOST}:${PORT}`);
        const post = new Post({ name: 'test' });
        post.save().then((post) => console.log('Post saved!', post));
        Post.find().then((posts) => console.log('Posts found!', posts));
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