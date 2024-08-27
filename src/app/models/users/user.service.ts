import TUser from "./user.interface";
import userModel from "./user.model";

const createUserIntoDb = async (data: TUser) => {
    const result = await userModel.create(data);
    return result;
};


export const userServices = {
    createUserIntoDb,
}