// @ts-ignore
import express from 'express';


const app = express();

app.use(express.json({limit : "16kb"}))
app.use(express.static("public"))



export default app