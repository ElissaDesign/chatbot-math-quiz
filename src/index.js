import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import homeRoute from './routes/home.route.js'
import dialogflowRoute from './routes/dialogflow.route.js'

const PORT  = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(cors())

app.use(express.json());

app.use(homeRoute);
app.use(dialogflowRoute);


app.listen(PORT, ()=>{
    console.log(`The server is running at port ${PORT} `)
});