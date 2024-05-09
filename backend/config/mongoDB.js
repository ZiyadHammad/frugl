import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  mongoose.set('strictQuery', true)

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    
    console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold)
  } catch (error) {
    console.log(error.message)
  }
}