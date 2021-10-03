const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({ 
    first_name: { type: String, required: false },
    number: {type: Number, required: false},
    email: {type: String, required: false},
    password: {type: String, required: false},
    bagItems: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
          quantity: { type: Number, default: 1 },
          
        },
      ],
      wishListItems: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
          // price: { type: Number, default: 0 },
        },
      ],
      active: { type: Boolean, default: false },
    },
    {
        versionKey: false,
        timestamps: true
    })
    
    const Signup = mongoose.model('signup',signupSchema)
module.exports = Signup
