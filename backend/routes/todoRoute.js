import express from "express";
import { createTodo, getAllTodo } from "../controller/todoController.js";

const router = express.Router();

router.route("/").get(getAllTodo).post(createTodo);

export default router;
