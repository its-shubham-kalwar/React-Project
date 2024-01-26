const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://admin:Shubham@cluster0.4t4oxaa.mongodb.net/")
  .then(() => console.log("Connected to mongodb"))
  .catch((e) => console.log(e));
