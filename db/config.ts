import mongoose from "mongoose";
import { Elsie_Swash_Caps } from "next/font/google";

let URL: string;

if (process.env.MONGODB_URI) {
  URL = process.env.MONGODB_URI;
} else {
  throw new Error("MONGODB enviroment variable is not set");
}

let connected = false;

//Funkcja za pomoca ktora łączymy sie z baza danych
const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //sprawdzamy czy jestesmy juz polaczeni z baza danych
  if (connected) {
    console.log("MongoDB is connected");
    return;
  }

  //polaczenie z baza danych
  try {
    await mongoose.connect(URL);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
