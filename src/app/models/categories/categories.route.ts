import { Response, Router, Request, NextFunction } from "express";
import { productCategoryControllers } from "./categories.controllers";
import categoriesValidationSchema from "./categories.validation";

const router = Router();

const validateData =  (req: Request, res: Response, next: NextFunction) => {
    const validate = categoriesValidationSchema.parse(req.body);
    if(!validate){
        throw new Error('Data does not validated')
    }
    next();
}

router.put('/', validateData, productCategoryControllers.createProductCategories);
router.get('/', (req, res) => res.send('hello'));


export const categoryRoute = router;