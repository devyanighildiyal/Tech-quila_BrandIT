const mongoose = require('mongoose');

import mongoose from 'mongoose';
const { Schema } = mongoose;

const PersonalSchema = new Schema({
    height:{
        type: Number,
        required: true
    } ,
    weight:{
        type: Number ,
        required: true
    } ,
    
     
});

module.exports = mongoose.model('personal', PersonalSchema);
