import "./config.mjs";

import { log } from "console";
import express from "express";
import path, { dirname } from "path";
import url from "url";

const app = express(); // create app instance

// static express
const _dirname = path.dirname(url.fileURLToPath(import.meta.url));
app.use(express.static(path.join(_dirname, "..", "public")));

// body parser
app.use(express.urlencoded({ extended: false }));

// testing APIs
app.get("/api/somewhere", (req, res) => {
  res.json({ message: "this is data from your API" });
});

// catchcall handeller
app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "..", "index.html"));
});

// listen on port
app.listen(process.env.PORT || 8000);
