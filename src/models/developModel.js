import mongoose from "mongoose";

const developUserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String },
    password: { type: String },
    img_profile: { type: String },
    level: { type: Number, default: 1 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const developQuestionSchema = new mongoose.Schema(
  {
    question_type: { type: String, enum: ["PG", "truefalse", "checkbox"], required: true },
    level: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    question: { type: String, required: true },
    option_answer: { type: String },
    real_answer: { type: String, required: true },
    url_image: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const developUserAnswerSchema = new mongoose.Schema(
  {
    question_id: { type: String, ref: "Question" },
    user_id: { type: String, ref: "User" },
    question_type: { type: String, enum: ["PG", "truefalse", "checkbox"], required: true },
    question: { type: String, required: true },
    option_answer: { type: String },
    level: { type: Number, required: true, enum: [1, 2, 3, 4, 5] },
    attempt: { type: Number },
    real_answer: { type: String, required: true },
    user_answer: { type: String },
    passed: { type: Boolean },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Userdevelop = mongoose.model("UserDevelop", developUserSchema);
const Questiondevelop = mongoose.model("QuestionDevelop", developQuestionSchema);
const UserAnswerdevelop = mongoose.model("UserAnswerDevelop", developUserAnswerSchema);

export { Userdevelop, Questiondevelop, UserAnswerdevelop };
