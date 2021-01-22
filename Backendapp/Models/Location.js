const mongoose = require('mongoose');

// Initialising the mongoose Schema
const Schema = mongoose.Schema;

// Registering the City Schema
const CitySchema = new Schema({
   name: {
      type: String,
      required: true
  },
  city_id: {
      type: String
  },
  location_id: {
      type: String
  },
  city_name: {
      type: String
      
  }
})

module.exports =mongoose.models.Location|| mongoose.model('city', CitySchema);