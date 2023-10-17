import { Userdevelop } from "../models/developModel.js";

export const developCreateUserRepo = async (data) => {
  try {
    const user = new Userdevelop(data);
    return user.save();
  } catch (error) {
    console.log("repo : failed to create user");
    throw error;
  }
};
export const developGetUserByEmailRepo = async (email) => {
  try {
    console.log(email, 6767);
    const user = await Userdevelop.findOne(email).select("-id");
    return user;
  } catch (error) {
    console.log("repo : failed to get user by email");
    throw error;
  }
};

export const developGetAllUserRepo = async () => {
  try {
    const user = await Userdevelop.find().select("-id");
    return user;
  } catch (error) {
    console.log("repo : failed to get all user");
    throw error;
  }
};

export const developGetUserByIdRepo = async (id) => {
  try {
    const user = await Userdevelop.findById(id).select("-id");
    return user;
  } catch (error) {
    console.log("repo : failed to get user by id");
    throw error;
  }
};

export const developUpdateLevelUserRepo = async (id) => {
  try {
    const updateLevel = await Userdevelop.findByIdAndUpdate(id, { $inc: { level: 1 } }, { new: true });
    return updateLevel;
  } catch (error) {
    console.log("repo : failed to update user level by id");
    throw error;
  }
};
