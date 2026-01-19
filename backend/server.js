import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000

// Initialize connections only once
let isConnected = false;

const initializeApp = async () => {
    if (!isConnected) {
        await connectDB();
        connectCloudinary();
        isConnected = true;
    }
};

// middlewares
app.use(express.json())
app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174', 
        'https://prescripto-frontend.vercel.app',
        'https://prescripto-admin.vercel.app'
    ]
}))

// Initialize before handling requests
app.use(async (req, res, next) => {
    await initializeApp();
    next();
});

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

// For Vercel, we export the app
export default app;

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log(`Server started on PORT:${port}`))
}