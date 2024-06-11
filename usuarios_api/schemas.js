const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    codeStudent: {
      type: String,
      required: true
    },
    name:{
      type: String,
      required: true
    },
    lastname:{
      type: String,
      required: true
    },
    gender:{
      type: String,
      required: true
    },
    habitacion:{
      type: Number,
      required: true
    },
    Status: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = {userSchema}