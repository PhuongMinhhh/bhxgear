import mongoose from "mongoose";
const infoModel  = new mongoose.Schema({
        sophieubh: {type: String, required: true, unique: true},   
        khachhang: {type: String},
        diachi: {type:String},
        sanpham : {type: String},
        serialnumber: {type: String, required: true, unique: true},
        trungtambaohanh: {type: String},
        ghichu: {type: String},
        loai: {type: String},
        ngaytaophieu: {type: Date, default: Date.now()},


});
export const Info = mongoose.models.infos || mongoose.model('infos', infoModel)