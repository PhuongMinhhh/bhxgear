import mongoose from "mongoose";
const infoModel  = new mongoose.Schema({
        sophieu: {type: String, required: true, unique: true},   
        ngaynghan: {type: Date},
        loai: {type: String},
        model: {type: String},
        tinhtrang: {type: String},
        sncu: {type: String},
        snmoi: {type: String},
        trungtambaohanh: {type: String},
        ngaydi: {type: Date},
        ngayve: {type: Date},


});
export const Info = mongoose.models.infos || mongoose.model('infos', infoModel)