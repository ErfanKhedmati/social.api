import { Router } from "express";
import { userStore } from "../server.js";

const router = Router();

router.get("/getAllUsers", async (req, res)=> {
    const users = await userStore.getAllUsers();;
    res.json(users);
});

router.post("/addUser", async (req, res)=> {

})

export default router;