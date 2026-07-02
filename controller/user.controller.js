import { getAllUsers as getAllUsersService } from "../service/user.service.js"

export const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}