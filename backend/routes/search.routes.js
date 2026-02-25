import express from "express";
import { searchDoctors } from "../controller/search.controller.js";

const router = express.Router();

router.post("/search", searchDoctors);

export default router;