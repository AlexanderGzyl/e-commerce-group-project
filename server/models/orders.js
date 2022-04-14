const mongoose = require('mongoose')
const {Schema } = mongoose;

// schema of model @ order

const companySchema = new Schema({
  email: {
   type: String,
   require: true
  },
  phone: {
   type: String,
   require: true
  },
  fname: {
   type: String,
   require: true
  },
  lname: {
   type: String,
   require: true
  },
  address: {
   type: String,
   require: true
  },
  postalcode: {
   type: String,
   require: true
  },
  country: {
   type: String,
   require: true
  },
  credit_card: {
   type: String,
   require: true
  },
  cvv: {
   type: String,
   require: true
  },
  TotalPrice: {
   type: String,
   require: true
  },
  items: [
   {
    _id: {
       type: String,
       require: true
      },
      name: {
       type: String,
       require: true
      },
      price: {
       type: String,
       require: true
      },  
      imageSrc: {
       type: String,
       require: true
      },
      body_location: {
       type: String,
       require: true
      },
      companyId: {
        type: String,
        require: true
      },
      category: {
        type: String,
        require: true
      },
      quantity: {
        type: String,
        require: true
      }
   }
  ]
})

// export of model @ order

module.exports = mongoose.model('Order',companySchema)