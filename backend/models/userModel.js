import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  email: {
    type: String,
    required: [true, "email field is required"],
    unique: true,
    validate: [validator.isEmail, "Invalid email address provided"],
  },
  password: {
    type: String,
    required: [true, "password field is required"],
    min: [8, "Password must be at least 8 characters"],
  },
  confirmPassword: {
    type: String,
    required: [true, "password confirm field is required"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Confirm Password does not match",
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
