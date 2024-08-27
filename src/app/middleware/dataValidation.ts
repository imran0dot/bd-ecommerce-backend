import {Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const dataValidation = (schema: AnyZodObject) => {
    return  async (req: Request, res: Response, next: NextFunction) => {
        try{
            await schema.parseAsync(req.body);
             return next()
        }catch(err){
           throw new Error('something went wrong!' + err);
        }
    }
};

export default dataValidation;