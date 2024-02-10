import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllUser = catchAsync(async (req, res, next) => {
  const user = await User.findById();

  res.status(200).json({
    status: "ok",
    data: user,
  });
});
