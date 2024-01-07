const express = require("express");
const { chats } = require('./data/data');
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const userRouters = require('./routes/userRoutes')
const { notFound , errorHandler } =require('./middlewares/errorMiddleware')

dotenv.config();
const app = express();
connectDB ();


app.use(express.json()); 
app.get('/', (req, res) => {
    res.send("API is Running");
});

app.use('/api/user',userRouters)

app.use(notFound)
app.use (errorHandler)
const PORT = process.env.PORT || 5000

app.listen(5000, console.log("server Strated on Port 5000"));
 