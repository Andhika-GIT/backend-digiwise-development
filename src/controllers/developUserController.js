import { developCreateUserService, developLoginUserService, developGetAllUserService, developGetUserByIdService, developGetQuestionUserByLevelService, developGetQuestionUserByIdQuestionService } from "../services/developUserService.js";
import { compareAnswer } from "../services/calculation.js";
import { generateResponse, responseError } from "../pkg/responder.js";
import { CustomError } from "../pkg/customError.js";

export const developCreateUserController = async (req, res) => {
  try {
    let { username, email, password, img_profile } = req.body;
    if (username == "") {
      throw new CustomError("username is required", 400);
    }
    if (email == "") {
      throw new CustomError("email is required", 400);
    }

    if (password == "") {
      throw new CustomError("password is required", 400);
    }

    const user = await developCreateUserService(username, email, password, img_profile);
    generateResponse(res, 201, "succes register", user);
  } catch (error) {
    responseError(res, error);
  }
};

export const developLoginUserController = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (email == "") {
      throw new CustomError("email is required", 400);
    }
    if (password == "") {
      throw new CustomError("password is required", 400);
    }
    const token = await developLoginUserService(email, password);
    generateResponse(res, 200, "success login", token);
  } catch (error) {
    responseError(res, error);
  }
};

export const developGetAllUserController = async (req, res) => {
  try {
    const users = await developGetAllUserService();
    generateResponse(res, 200, "success get all user", users);
  } catch (error) {
    responseError(res, error);
  }
};

export const developGetUserByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await developGetUserByIdService(id);

    generateResponse(res, 200, "success get user by id", user);
  } catch (error) {
    responseError(res, error);
  }
};

export const developGetQuestionUserByLevelController = async (req, res) => {
  try {
    const { level } = req.query;
    const userId = req.user.user_id;
    const questionByLevel = await developGetQuestionUserByLevelService(level, userId);
    generateResponse(res, 200, "success get questions by User level", questionByLevel);
  } catch (error) {
    responseError(res, error);
  }
};

export const developGetQuestionUserByIdQuestionController = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const questionId = req.params.questionId;

    const questionById = await developGetQuestionUserByIdQuestionService(userId, questionId);
    generateResponse(res, 200, "success get questions Id by User level passed", questionById);
  } catch (error) {
    responseError(res, error);
  }
};

export const developUserAnswerController = async (req, res) => {
  try {
    const userId = req.user.user_id;

    const { level, question_type, answers } = req.body;
    const userAnswer = answers.map((answer) => ({
      question_id: answer.question_id,
      user_answer: answer.user_answer,
    }));

    console.log(userAnswer, 1414);
    const calculate = compareAnswer(userAnswer);
    // userAnswer.forEach((answerObj) => {
    //   const questionId = answerObj.question_id;
    //   const userAnswer = answerObj.user_answer;

      // userAnswerArr.push({ questionId, userAnswer });
    // });

    // const dataAnswers = await

    generateResponse(res, 201, "success post questions Id by User level passed", calculate);
  } catch (error) {
    responseError(res, error);
  }
};
