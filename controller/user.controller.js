import { getAllUsers as getAllUsersService, addUser as addUserSevice } from "../service/user.service.js"
import { userStore } from "../server.js";
export const getAllUsers = async () => {
    const users = await getAllUsersService();
    return users;
}

export const addUser = async (user) => {
    const users = await userStore.getAllUsers();
    let repeat = false;
    for (const u of users) {
        if (u.username == user.username) {
            repeat = true;
            break;
        }
    }
    if(repeat) return {success: false, user: null};
    const newUser = await addUserSevice(user);
    return { success: true, user: newUser };
}