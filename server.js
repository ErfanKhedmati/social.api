import express from "express"
import userRoutes from "./routes/user.route.js"
import { UserStore, SystemStore } from "./store/store.js"

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Store
export const userStore = new UserStore();
export const systemStore = new SystemStore();
userStore.update();
systemStore.update();

// routes
app.use("/api/user", userRoutes);

// listen
app.listen(PORT, ()=> {
    console.log("SERVER IS LITENING ON PORT 3000");
})