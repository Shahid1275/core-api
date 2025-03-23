import express from "express";
import { userLoginController, userSignupController } from "./controller.js";
const router = express.Router();

router.get("/login", userLoginController);
router.get("/signup", userSignupController);

export default router;
