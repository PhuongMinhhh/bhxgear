import mongoose from "mongoose";

global.mongoose = {
    conn: null,
    prosime: null,
}
export async function dbConnect(){
    if(global.mongoose && global.mongoose.conn){
        console.log('Connecting to Mongoose')
        return global.mongoose.conn;

    } else{
        const connectString = process.env.MONGODB_URI;
        const prosime = mongoose.connect(connectString,{
            autoIndex: true,
        });
        global.mongoose= {
            conn : await prosime,
            prosime,
        };
        console.log('Connected to Mongoose')
        return await prosime
    }
}