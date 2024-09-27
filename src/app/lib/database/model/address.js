import mongoose from "mongoose";
const addressModel  = new mongoose.Schema({
    hang: {type: String, required: true},
    diachi: {type: String},
    sanphamgui: {type: String}, 


});
export const Address = mongoose.models.addressbh || mongoose.model('addressbh', addressModel)