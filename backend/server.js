import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./.config.env" });

const DB = `${process.env.DB_URL}`
  .replace("<USERNAME>", process.env.DB_USER)
  .replace("<PASSWORD>", process.env.DB_PASS);

const port = 8080;
app.listen(port, async function () {
  await mongoose.connect(DB).then(() => console.log("Connected to database"));

  console.log(`listening on port ${port}`);
});
