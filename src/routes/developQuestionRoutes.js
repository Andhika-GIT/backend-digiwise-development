import express from "express";
const router = express.Router();
import { developCreateQuestionController, developGetQuestionByIdController, developGetAllQuestionsController } from "../controllers/developQuestionController.js";

router.post("/", developCreateQuestionController);
router.get("/:id", developGetQuestionByIdController);
router.get("/", developGetAllQuestionsController);

export default router;
