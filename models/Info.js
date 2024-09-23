import { model, models, Schema } from "mongoose";



const infoSchema = new Schema({
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


}, {
        timestamps: true,
    
});

const Info = models?.Info || model("Info", infoSchema);

export default Info;