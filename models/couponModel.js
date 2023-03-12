const mongoose = require('mongoose');
const ObjectId=mongoose.Schema.Types.ObjectId;
const couponSchema = new mongoose.Schema({
  couponName: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  couponCode: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    
  },
  minimumAmount: {
    type: Number,
    
  },
  maximumAmount: {
    type: Number,
  
  },
  discount: {
    type: Number,
    required: true
  },
 user:{type:Array}
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
