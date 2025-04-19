import app from "./app.js";
import {connectDb} from '../db/index.js';
import dotenv from 'dotenv'

dotenv.config()


connectDb()
     .then(
        () => {
            app.listen(process.env.PORT,() => {
                console.log("app is listening at : ",process.env.PORT)
            })
        }
     ).catch((error) => {
        console.log(error)
     })
