import mongoose from "mongoose";

const conectarDb = async() => {
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("conexion exitosa");
} catch (error) {
    console.error(error)
}
}
export default conectarDb;