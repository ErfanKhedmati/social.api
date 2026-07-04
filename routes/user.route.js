import { Router } from "express";
import { userStore } from "../server.js";

const router = Router();

router.get("/getAllUsers", async (req, res) => {
    const users = await userStore.getAllUsers();;
    res.json(users);
});

router.post("/addUser", async (req, res) => {
    const user = req.body;
    const newUser = await userStore.add(user);
    if (newUser.success) {
        res.json({ success: true, user: newUser.user });
    } else {
        res.status(400).json({ success: false, user: null });
    }
})

export default router;