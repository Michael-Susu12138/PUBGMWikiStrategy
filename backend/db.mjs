import NewsModel from "./models/News.mjs";
import mongoose from "mongoose";

// mongoose.connect(process.env.DSN);
mongoose
  .connect(process.env.DSN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.error("MongoDB connection error:", err));

const db = {
  mongoose: mongoose,
  News: NewsModel,
};

export default db;
