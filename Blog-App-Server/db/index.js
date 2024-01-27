const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://admin:Shubham@cluster0.2dwjxmk.mongodb.net/")
  .then(() => console.log("Connected to mongodb"))
  .catch((e) => console.log(e));
