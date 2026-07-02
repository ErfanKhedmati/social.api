import { getAllUsers as getAllUsersService } from "../service/user.service.js"

export const getAllUsers = async () => {
    const users = await getAllUsersService();
    return users;
}