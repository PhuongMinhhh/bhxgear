import mongoose from 'mongoose';

const connect = async (req, res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            uesNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }catch(e){
        throw new Error('Error connecting to Mongoose')
    }
}
export default connect;