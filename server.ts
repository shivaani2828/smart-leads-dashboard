import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes";
import leadRoutes from "./routes/lead.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

mongoose.connect(process.env.MONGO_URI!)
.then(() => console.log("MongoDB connected"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});