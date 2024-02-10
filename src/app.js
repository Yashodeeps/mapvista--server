import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(
  express.urlencoded({ extended: true, limit: "16kb" })
); /*express.urlencoded() this will also work, but for more in production */
app.use(express.static("public")); //for storing any files and folders
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.route.js";
import projectRouter from "./routes/project.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/projects", projectRouter);

export { app };
