import { NextFunction, Router, Request, Response } from "express";
import { userController } from "./user.controllers";
import ZodUser from "./user.validation";
import dataValidation from "../../middleware/dataValidation";

const router = Router();

router.put('/', dataValidation(ZodUser), userController.createUser)

export const userRouter = router;