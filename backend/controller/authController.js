import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

export const login = catchAsync(async (req, res, next) => {});

export const signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    status: "ok",
    message: "Signed up successfully",
    data: user,
  });
});
