import "./config.mjs";

import { log } from "console";
import express from "express";
import path from "path";
import url from "url";
import cors from "cors";

// database handeling
import db from "./db.mjs";

// routes import
import newsRoutes from "./routes/newsRoutes.mjs";

const app = express(); // create app instance

// static express
const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, "..", "public")));

// api sends to the frontend
app.use(cors());

// body parser
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  log("request Method: ", req.method);
  log("request Path: ", req.path);
  log("request Query: ", req.query);
  log("request Body: ", req.body);
  log("\n");
  next();
});

// api endpoints
// news handeling
app.use("/api/news", newsRoutes);

// TESTING DATA
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/data", (req, res) => {
  const data = {
    message: "Hello from the server",
  };
  res.json(data);
});

// END TESTING DATA

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`);
});