import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json({ limit: "900kb" }));
app.use(express.urlencoded({ extended: true, limit: "900kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// route imports

import userRoute from "./routes/user.route.js";
import taskRoute from "./routes/task.route.js";

// route declaration

app.use("/api/v1/users", userRoute)
app.use("/api/v1/tasks", taskRoute)

export { app };