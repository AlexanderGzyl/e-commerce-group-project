const mongoose = require('mongoose')
const {Schema } = mongoose;

// schema of model @ flight

const companySchema = new Schema({
  email: {
   type: String,
   require: true
  },
  name: {
   type: String,
   require: true
  },
  address: {
   type: String,
   require: true
  },
  creditCard: {
   type: String,
   require: true
  },
  items: [
   {
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
      imageSrc: {
       type: String,
       require: true
      },
      companyId: {
        type: String,
        require: true
      },
      quantity: {
        type: Number,
        require: true
      }
   }
  ]
})

// export of model @ flight

module.exports = mongoose.model('Company',companySchema)