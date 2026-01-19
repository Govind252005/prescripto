import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Close existing connections
        if (mongoose.connections[0].readyState) {
            console.log('Already connected to MongoDB');
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        });
        
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Error:", error);
    }
}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.