import { Request, Response } from "express"
import TUser from "./user.interface"
import catchAsync from "../../../utils/catchAsync"
import sendResponse from "../../../utils/sendResponse";
import { userServices } from "./user.service";


const createUser = catchAsync(async (req: Request, res: Response) => {
    const user: TUser = req.body;
    const result = await userServices.createUserIntoDb(user);
    sendResponse(res, {
        message: 'user created Successfully!',
        data: result,
        status: 201
    });
});

export const userController = {
    createUser,
}