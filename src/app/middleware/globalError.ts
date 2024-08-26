import { Request, Response, NextFunction } from "express";

const globalError = async (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        status: 'error',
        statusCode: statusCode,
        message: err.message,
    });
};

export default globalError;
