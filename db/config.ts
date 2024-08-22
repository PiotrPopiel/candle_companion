import mongoose from "mongoose";

let URL: string;

if (process.env.MONGODB_URI) {
  URL = process.env.MONGODB_URI;
} else {
  throw new Error("MONGODB enviroment variable is not set");
}

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  try {
    await mongoose.connect(URL);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
