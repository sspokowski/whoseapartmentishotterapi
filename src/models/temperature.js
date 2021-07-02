import mongoose from 'mongoose';

const temperatureSchema = mongoose.Schema({
    date: Date,
    shak: String,
    arlo: String,
});