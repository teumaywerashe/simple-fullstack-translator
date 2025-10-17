const express = require('express')
const cors = require('cors')
const connectDB = require('./dbs/connection')
const router = require('./route/route')
const app = express()
require('dotenv').config()
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());
app.use('/api/v1', router)
const PORT = process.env.PORT || 3000
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log('server listing on port', PORT))
    } catch (error) {
        console.log(error.message);
    }
}
start();