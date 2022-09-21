import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default async function connect() {
   
if(mongoose.connection.readyState){
    console.log('DB Already Connected')
} else {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connected'))
}

}