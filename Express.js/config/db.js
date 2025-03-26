import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://Greatstack:Greatstack123@cluster0.r6qgj.mongodb.net/Express";

  await mongoose.connect(MONGODB_URI).then(() => {
    console.log("Connected to MongoDB");
  });
};
