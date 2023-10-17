import express from "express";
const router = express.Router();
import {
  developCreateUserController,
  developLoginUserController,
  developGetAllUserController,
  developGetUserByIdController,
  developGetQuestionUserByLevelController,
  developGetQuestionUserByIdQuestionController,
  developUserAnswerController,
} from "../controllers/developUserController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

router.post("/register", developCreateUserController);
router.post("/login", developLoginUserController);

// ----------------------- to GET question By User ------------------------------------
router.get("/questions", verifyToken, developGetQuestionUserByLevelController);
router.get("/question/:questionId", verifyToken, developGetQuestionUserByIdQuestionController);

// --------------------------------- ANSWER USER -----------------------------------
router.post("/answers/:userId", verifyToken, developUserAnswerController);
// router.get("/answer", verifyToken, ) get jawaban user

router.get("/", developGetAllUserController);
router.get("/:id", developGetUserByIdController);

export default router;
