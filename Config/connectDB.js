import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
export async function connectDB() {
    try {
        const uri = process.env.MONGO_URI

        const connected = await mongoose.connect(uri);
        if (connected) {
            console.log('App is coonected to DB')
        } else {
            console.log('Error connecting to DB')
        }

    } catch (error) {
        console.log('Error conncecting to DB', error)
    }
}
