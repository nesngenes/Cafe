import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import menuRouters from './routes/menus.js';
import cafeRoutes from './routes/cafes.js';
import dotenv from 'dotenv'
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config()


app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.use(cors())
app.use('/labuenacafe/menus', menuRouters)
app.use('/labuenacafe/user', userRoutes)
app.use('/labuenacafe/cafes', cafeRoutes)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')))
    app.get('*', function(req,res) {
        res.sendFile(
            path.join(__dirname, './client/build/index.html'),
            function (err) {
                res.status(500).send(err);
            }
        );
    }) 
} else {
    app.get('/', (req, res) => {
        res.send('API RUNNING')
    })
}

const CONNECTION_URL = process.env.CONNECTION_URL

const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error.message))
