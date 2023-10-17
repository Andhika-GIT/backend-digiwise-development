import { developCreateQuestionRepo, developGetQuestionByIdRepo, developGetAllQuestionsRepo } from "../repository/developQuestionRepo.js";
import { responseError } from "../pkg/responder.js";

export const developCreateQuestionService = async (dataQuestion) => {
  try {
    const question = dataQuestion;
    return await developCreateQuestionRepo(question);
  } catch (error) {
    console.log("service : failed to create question", error);
    throw error;
  }
};

export const developGetQuestionByIdService = async (id) => {
  try {
    console.log(id, 3737);
    
    const questionId = await developGetQuestionByIdRepo(id);
    console.log(questionId, 4848);
    if (questionId == null) {
      console.log("service: question not found");
      throw new responseError("service: question not found", 404);
    }
    return questionId;
  } catch (error) {
    console.log("service : failed to get question by id", error);
    throw error;
  }
};

export const developGetAllQuestionsService = async () => {
  try {
    return await developGetAllQuestionsRepo();
  } catch (error) {
    console.log("service : failed to create question", error);
    throw error;
  }
};
