const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const MealtypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    image: {
        type: String
    },
    meal_type: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.models.Mealtype || mongoose.model('mealtype', MealtypeSchema);   // exporting the model 