import mongoose from "mongoose";

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/blog-mern-project", {
    serverSelectionTimeoutMS: 600000,
  });

  if (conn) {
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }
};

export default connectDB;
