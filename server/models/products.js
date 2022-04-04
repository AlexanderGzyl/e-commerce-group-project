const mongoose = require('mongoose')
const {Schema } = mongoose;

// schema of model @ Products

const productsSchema = new Schema({
  _id: {
   type: Number,
   require: true
  },
  name: {
   type: String,
   require: true
  },
  price: {
   type: Number,
   require: true
  },
  body_location: {
   type: String,
   require: true
  },
  category: {
   type: String,
   require: true
  },
  imageSrc: {
   type: String,
   require: true
  },
  numInStock: {
   type: String,
   require: true
  },
  companyId: {
   type: String,
   require: true
  }
})

// export of model @ flight

module.exports = mongoose.model('Item',productsSchema)