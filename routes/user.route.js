import { Router } from "express";
import {getAllUsers} from "../controller/user.controller.js";

const router = Router();

router.get("/getAllUsers", getAllUsers);

export default router;