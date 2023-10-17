import express from "express";
const router = express.Router();

import questionRoute from "./developQuestionRoutes.js";
import userRoute from "./developUserRoutes.js";

// ----------------- User ----------------------------
router.use("/users", userRoute);

// ----------------- Question ------------------------
router.use("/questions", questionRoute);

export default router;
