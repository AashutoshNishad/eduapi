const mongoose = require('mongoose');

const Student =new mongoose.Schema({
Name: {
    type: String,
    required: true,
},
Class: {
    type: Number,
    required: true,
},
Subject: {
    type: String,
    length: {
        max: 20
    }
},
Mobile: {
    type: Number,
    length: {
        min: 10,
        max: 10
    }
},
StudentId: {
    type: String,
    length: 5,
}
})

module.exports = mongoose.model("Teacher" , Teacher)