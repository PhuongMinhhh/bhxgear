import mongoose from "mongoose";

const  MONGODB_URI = process.env.MONGODB_URI;

const connect = async ()=>{
    const connectionState = mongoose.connection.readyState;
    if ( connectionState === 1){
        console.log('Already connected');
        return;
    }
    if(connectionState ===2){
        console.log('connecting...');
    }
    try{
        mongoose.connect(MONGODB_URI!, {
            dbName: 'baohanhxgearapi',
            bufferCommands  : true
        });
        console.log('Connected')
    }catch (err:any){
        console.log('Failed to connect')
        throw new Error('Failed to connect',err);
    }

}
export default connect;