import express from "express";
import { sendEmailToOwner } from "../controllers/mailController.mjs";

const router = express.Router();

router.post("/send", sendEmailToOwner);

export default router;
