import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDb = async () => {
    try {
       const response =  await mongoose.connect(process.env.MONGODB_URI)
       console.log(`\n Mongodb connected !! Db host : ${response.connection.host}`)
    } catch (error) {
        console.log("error in database : " +  error)
    }
}