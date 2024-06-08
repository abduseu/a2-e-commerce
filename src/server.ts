import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`express-server is running on ${config.port}`);
    });
  } catch (error) {
    console.log("database error");
  }
}
main();
