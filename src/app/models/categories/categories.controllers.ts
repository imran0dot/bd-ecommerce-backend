import { date } from "zod";
import catchAsync from "../../../utils/catchAsync"
import TProductCategories from "./categories.interface"
import { ProductCategoryServices } from "./categories.service"
import sendResponse from "../../../utils/sendResponse";

const createProductCategories = catchAsync(async (req, res, next) => {
    const category: TProductCategories = req.body;
    const result = await ProductCategoryServices.createProductCategoryIntoDb(category);
    sendResponse(res, {
        message: 'Category Created Successfully!',
        data: result,
        status: 201
    });
});


export const productCategoryControllers = {
    createProductCategories
}