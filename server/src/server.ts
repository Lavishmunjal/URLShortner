import express, { urlencoded } from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/dbconfig";
import shortUrl from "./routes/shorturl"

const app = express()
dotenv.config()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())
app.use(urlencoded({
    extended:true
}))

connectDb()

const port = process.env.PORT || 5000

app.use("/api/", shortUrl)

app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
    
})