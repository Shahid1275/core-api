// const express = require("express");   // this is used in the common js module only
import express from "express"; //This is used in the Type module
import { userLoginController, userSignupController } from "./controller.js";
// import { searchController, usernameController } from "./controller.js";
import router from "./route.js";
const app = express();

const PORT = 3000;

//Define a simple Route
app.get("/", (req, res) => {
  res.send("Hello world I am from Home Page ");
});
app.use("/user", router);
// app.get("/user/login", userLoginController);
// app.get("/user/signup", userSignupController);

//Define a about route
// app.get("/about", (req, res) => {
//   res.send("Hello world I am from About Page ");
// });
// //Define a contact route
// app.get("/contact", (req, res) => {
//   res.send("Hello world I am from Contact Page ");
// });

//Define a Dynamic route
// app.get("/user/:username", usernameController);

// //Define for a query parameter
// app.get("/search", searchController);
app.listen(PORT, () => {
  console.log(`Server is listening on this Port:${PORT}`);
});
