import mongoose from 'mongoose';
import express from 'express';
import routes from './src/routes/apartmentRoutes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const __dirname = fileURLToPath(import.meta.url);

//set up server
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

//set up request body parsing
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//apply routes
app.use('/', routes);

// app.get('*', (request, response)=> {
//     response.sendFile(path.resolve(__dirname, './../src/gui/App.svelte'));
// });

//catch all other routes
app.use((request, response) => {
    response.status(404).json({message: '404 - Not Found', status: 404});
});

//handle errors
app.use((error, request, response, next) => {
    console.error(error);
    response.status(error.status || 500).json({error: error.message, status: 500});
});

app.listen(port, async () => {
    console.log(`server running on port: ${port}`);
});