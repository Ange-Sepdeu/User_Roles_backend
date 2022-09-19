import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import router from './router/router.js';

const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use('/', router);

app.get('/', (req,res)=> res.send('Testing ...'));

const port = 5000
app.listen(port, (req, res) => console.log(`Server listening on port: http://localhost:${port}`))
