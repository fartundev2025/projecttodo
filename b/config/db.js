import mongoose from "mongoose";

const DbCon=async()=>{
    try {
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/"; // ✅ Use env variable
        mongoose.connect("")
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error)
    }
}
export default DbCon