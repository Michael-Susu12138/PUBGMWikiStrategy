import NewsModel from "./models/News.mjs";
import mongoose from "mongoose";

mongoose.connect(process.env.DSN);

const db = {
  mongoose: mongoose,
  News: NewsModel,
};

export default db;
