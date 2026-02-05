import { Router } from "express";
import { sigin, signup } from "../controller/authController";

const router=Router();

router.post("/signin",sigin)
router.post("/signup",signup)

export default router;
