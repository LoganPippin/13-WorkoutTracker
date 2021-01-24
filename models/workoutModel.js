const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now() },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'A workout type is required.',
      },
      name: {
        type: String,
        trim: true,
        required: 'A workout name is required.',
      },
      duration: {
        type: Number,
        trim: true,
        required: 'A workout duration is required.',
      },
      weight: {
        type: Number,
        trim: true,
        required: 'Weight amount is required.',
      },
      reps: {
        type: Number,
        trim: true,
        required: 'A number of reps is required.',
      },
      sets: {
        type: Number,
        trim: true,
        required: 'The number of sets is required.',
      },
    },
  ],
});
