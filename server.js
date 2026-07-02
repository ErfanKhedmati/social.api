import express from "express"
import userRoutes from "./routes/user.route.js"

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use("/api/user", userRoutes);

// listen
app.listen(PORT, ()=> {
    console.log("SERVER IS LITENING ON PORT 3000");
})