const mongoose = require('mongoose');
const ventaSchema = new mongoose.Schema({
  nombreInternado: {
    type: String,
    required: true
  },
  numeroHabitacion: {
    type: String,
    required: true
  },
  capacidadHabitacion: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  });
  module.exports = {internadoSchema}