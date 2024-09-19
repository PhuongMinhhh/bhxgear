import { truncate } from "fs";
import { Schema, model, models } from "mongoose"

const InfoSchema = new Schema(
    {
        sophieu: {type: "string", required: true, unique: true},
        ngaynghan:{type: "date", required: true, unique: true},
        loai:{type: "string", required: true, unique: true},
        model: {type: "string", required: true, unique: true},
        
        sncu: {type:"string", required: true, unique: true},
        snmoi: {type: "string", required: true, unique: true},
        trungtambaohanh: {type: "string", required: true, unique: true},
        ngaydi: {type:"date", required: true, unique: true},
        ngayve: {type:"date", required: true, unique: true},

    },
    { 
        timestamps: true,
    }
)
const Info = models.Info || model("Info", InfoSchema); 
export default Info;