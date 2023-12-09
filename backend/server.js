const express = require("express");
const { chats } = require('./data/data');
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is Running");
});
app.get('/api/chat', (req, res) => {
    res.send(chats);
});

const PORT = process.env.PORT || 500
app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

app.listen(5000, console.log("server Strated on Port 5000"));
 