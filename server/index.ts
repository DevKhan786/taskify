import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db";

import userRouter from "./routes/authRoutes.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
