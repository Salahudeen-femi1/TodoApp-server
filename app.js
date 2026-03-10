import express from 'express';
import { connectDB } from './Config/connectDB.js'
import todoRouter from './router/router.js';

const app = express();
app.use(express.json())

const port = 4000;
 app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
 })

 connectDB()
 app.use('/api/todo', todoRouter)