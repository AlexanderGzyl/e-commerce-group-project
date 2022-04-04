const mongoose = require('mongoose')
const {Schema } = mongoose;

// schema of model @ flight

const companySchema = new Schema({
  _id: {
   type: Number,
   require: true
  },
  name: {
   type: String,
   require: true
  },
  url: {
   type: String,
   require: true
  },
  country: {
   type: String,
   require: true
  }
})

// export of model @ flight

module.exports = mongoose.model('Company',companySchema)