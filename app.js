import express from 'express';
import dotenv from 'dotenv';
import api from "./routes/api.js";
import { connectDB } from './config/db.js'
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/', api);

app.get('/', (req, res) => {
    // res.send("Hello World"); 
    res.json({
        success: true,
        message: "Welcome to the my API"
    })
})

// app.get('/compute', (req, res) => {
//     // http://localhost:5000/compute?a=10&b=40
//     let {a, b} = req.query; 
//     // let a = 10;
//     // let b = 20;
//     let c = Number(a) + Number(b)
//     res.send(`The sum of ${a} and ${b} is ${c}`);
// })

// app.post('/compute', (req, res) => {
//     let {a,b} = req.body;
//     let {d} = req.query;
//     // console.log(typeof(a), typeof(b))
//     let c = Number(a) + Number(b) + Number(d);
//     res.json({
//         success: true,
//         sum: c
//     });
// })

// app.get('/secret', (req, res) => {
//     let secret = process.env.SECRET  // Accessing the SECRET variable from .env file.
//     res.json({
//         success: true,
//         message: secret
//     });
// })

app.use('/api', api);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected at port: ${PORT}`);
})