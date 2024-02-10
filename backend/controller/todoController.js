import Todo from "../models/todoModel.js";
import catchAsync from "../utils/catchAsync.js";

export const createTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.create(req.body);

  res.status(201).json({
    status: "ok",
    message: "Created successfully",
    data: todo,
  });
});

export const getAllTodo = catchAsync(async (req, res, next) => {
  const todo = await Todo.find();

  res.status(200).json({
    status: "ok",
    totalResult: todo.length,
    data: todo,
  });
});
