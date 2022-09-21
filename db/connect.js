import mongoose from 'mongoose';
import dotenv from 'dotenv';

//for using .env variables
dotenv.config();

//function to connect with MongoDB using mongoose
export default async function connect() {
   
if(mongoose.connection.readyState){
    console.log('DB Already Connected')
} else {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connected'))
}

}