import { developCreateQuestionService, developGetQuestionByIdService, developGetAllQuestionsService } from "../services/developQuestionService.js";

import { generateResponse, responseError } from "../pkg/responder.js";

export const developCreateQuestionController = async (req, res) => {
  try {
    let { level, question, option_answer, real_answer, question_type, url_image } = req.body;
    if (level == 0) {
      throw new responseError("level is required", 400);
    }
    if (question == "") {
      throw new responseError("question is required", 400);
    }
    if (option_answer == {}) {
      throw new responseError("option answer is required", 400);
    }
    if (real_answer == "") {
      throw new responseError("real answer is required", 400);
    }
    if (question_type == "") {
      throw new responseError("question type is required", 400);
    }

    let newQuestion = await developCreateQuestionService(req.body);

    generateResponse(res, 201, "success create question", newQuestion);
  } catch (error) {
    responseError(res, error);
  }
};

export const developGetQuestionByIdController = async (req, res) => {
  try {
    const questionId = req.params.id;
    console.log(questionId, 6543);
    const dataQuestionId = await developGetQuestionByIdService(questionId);
    console.log(dataQuestionId, 5656);
    generateResponse(res, 200, "success question by id", dataQuestionId);
  } catch (error) {
    responseError(res, error);
  }
};

export const developGetAllQuestionsController = async (req, res) => {
  try {
    const dataQuestions = await developGetAllQuestionsService();
    generateResponse(res, 200, "success question by id", dataQuestions);
  } catch (error) {
    responseError(res, error);
  }
};
