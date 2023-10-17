import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import developRouter from "./src/routes/developRoutes.js";
import { connectDB } from "./src/utils/db.js";

dotenv.config();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

//develop
app.use("/", developRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
});
