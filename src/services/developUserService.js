import { developCreateUserRepo, developGetUserByEmailRepo, developGetAllUserRepo, developGetUserByIdRepo } from "../repository/developUserRepo.js";
import { developGetQuestionByLevelRepo, developGetQuestionByIdRepo } from "../repository/developQuestionRepo.js";
import { CustomError } from "../pkg/customError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { get } from "mongoose";

export const developCreateUserService = async (username, email, password, img_profile) => {
  try {
    const existsEmail = await developGetUserByEmailRepo({ email });
    if (existsEmail) {
      console.log("service : email already exists");
      throw new CustomError("email is already available, please login", 400);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userData = { username, email, password: hashPassword, img_profile };
    return await developCreateUserRepo(userData);
  } catch (error) {
    console.log("service : failed to create");
    throw error;
  }
};

export const developLoginUserService = async (email, password) => {
  try {
    console.log(email, password, 4545);
    const user = await developGetUserByEmailRepo({ email });
    if (!user) {
      console.log("service : user not found");
      throw new CustomError("user not found", 404);
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.log("service : password is not compare");
      throw new CustomError("Wrong Email or Password ", 400);
    }

    const token = jwt.sign(
      {
        user_id: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET
    );

    return { token };
  } catch (error) {
    console.log("service : please register first");
    throw error;
  }
};

export const developGetAllUserService = async () => {
  try {
    const users = await developGetAllUserRepo();
    return users;
  } catch (error) {
    console.log("service : failed to get all users");
    throw error;
  }
};

export const developGetUserByIdService = async (id) => {
  try {
    const user = await developGetUserByIdRepo(id);
    return user;
  } catch (error) {
    console.log("service : failed to get user by id");
    throw error;
  }
};

export const developGetQuestionUserByLevelService = async (level, id) => {
  try {
    const userId = await developGetUserByIdRepo(id);
    if (!userId) {
      console.log("service: user not found");
      throw new responseError("service: user not found", 404);
    }

    if (level <= userId.level) {
      const dataLevel = await developGetQuestionByLevelRepo(level);
      return dataLevel;
    } else {
      throw new CustomError("Kamu belum bisa akses quiz ini, karna level kamu belum mencukupi", 400);
    }
  } catch (error) {
    console.log("service : failed to get question user by level", error);
    throw error;
  }
};

export const developGetQuestionUserByIdQuestionService = async (userId, questionId) => {
  try {
    const userData = await developGetUserByIdRepo(userId);
    if (!userData) {
      console.log("service: user not found");
      throw new responseError("service: user not found", 404);
    }

    const questionData = await developGetQuestionByIdRepo(questionId);
    if (!questionData) {
      console.log("service: question not found");
      throw new responseError("service: question not found", 404);
    }

    if (userData.level >= questionData.level) {
      return questionData;
    } else {
      throw new CustomError("Kamu belum bisa akses quiz ini, karna level kamu belum mencukupi", 400);
    }
  } catch (error) {
    console.log("service : failed to get question user by id question", error);
    throw error;
  }
};

export const developUserAnswerController = async (userId) => {
  try {
    // cek user ada atau tidak
    const userData = await developGetUserByIdRepo(userId);
    if (!userData) {
      console.log("service: user not found");
      throw new responseError("service: user not found", 404);
    }

    // ambil tiap level untuk mengecek
    const questionId = await (level);
    if (dataLevel == userData.level) {
      // lakukan kalkulasi nilai
    } else {
      throw new CustomError("Kamu belum bisa akses quiz ini, karna level kamu belum mencukupi", 400);
    }
  } catch (error) {
    console.log("service : failed to post questions Id by User level", error);
    throw error;
  }
};
