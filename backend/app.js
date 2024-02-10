import express from "express";
import todoRouter from "./routes/todoRoute.js";
const app = express();
app.use(express.json());

app.use("/api/todo", todoRouter);

export default app;
