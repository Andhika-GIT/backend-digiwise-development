import mongoose from "mongoose";

// Koneksi ke database MongoDB
const connectDB = async () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "failed to connect database"));
  db.once("open", () => {
    console.log("Database Connected");
  });
};

export { connectDB };
