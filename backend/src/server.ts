import express, {Express, Response, Request} from "express";
import cors from "cors";
const Port = 2000

const app:Express = express()
app.use(express.json())
app.use(cors())

app.get('/', (req:Request,res:Response) => {
   res.status(200).json({message:"great"}) 
})

app.listen(Port , () => {
    console.log(`Server is running on port ${Port}`)
})