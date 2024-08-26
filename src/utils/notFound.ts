import sendResponse from "./sendResponse";
import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
    sendResponse(res, {
        data: 'not found!',
        message: res.statusMessage,
        status: 202
    })
};

export default notFound;