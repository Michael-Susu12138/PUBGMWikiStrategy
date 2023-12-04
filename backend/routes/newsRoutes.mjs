import express from "express";
import { getAllNews, createNews } from "../controllers/newsController.mjs";

const router = express.Router();

router.get("/", getAllNews);
router.post("/add", createNews);

export default router;

