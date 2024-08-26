import mongoose from "mongoose";
import TProductCategories from './categories.interface'

const categoriesSchema = new mongoose.Schema<TProductCategories>({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    }
});

const categoriesModel = mongoose.model<TProductCategories>('categorie', categoriesSchema);
export default categoriesModel;