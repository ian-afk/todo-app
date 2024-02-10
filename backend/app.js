import express from "express";
import todoRouter from "./routes/todoRoute.js";
import userRouter from "./routes/userRoute.js";
import errorController from "./controller/errorController.js";
const app = express();
app.use(express.json());

app.use("/api/todos", todoRouter);
app.use("/api/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

app.use(errorController);
export default app;
