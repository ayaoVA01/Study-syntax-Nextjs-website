const {default: mongoose} =require("mongoose");

const connection = {};


export const connectToDB = async()=>{
    try {
        if(connection.isConected){
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection[0].readyState;
        await mongoose.connect(process.env.MONGO);
      
      } catch (error) {
        console.log(error);
    throw new Error(error);}
}