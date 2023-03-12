const mongoose=require('mongoose');

const { Schema } = mongoose;
const bannerSchema = new Schema({
    bannerName:{type:String},
    bannerOffer:{type:String},

    image:{
        type:String 
    },
    status:{
        type:Boolean,
        default:true
    },
});
const banner = mongoose.model('banner', bannerSchema);

module.exports=banner;