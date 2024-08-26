import TProductCategories from "./categories.interface"
import categoriesModel from "./categories.schema"

const createProductCategoryIntoDb = async (data: TProductCategories) => {
    const result = await categoriesModel.create(data);
    return result;
};

export const ProductCategoryServices = {
    createProductCategoryIntoDb
} 