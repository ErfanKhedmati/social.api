import fs from "fs/promises";
import User from "../models/user.model.js";

export const getAllUsers = async () => {
    const usersData = await fs.readFile("./data/users.csv", "utf8");
    const users = usersData.split("\n").map(line => {
        const user = line.split(",");
        user[6] = user[6].split("\r")[0]
        const userModel = new User(
            user[0],
            user[1],
            user[2],
            user[3],
            user[4],
            user[5],
            user[6]
        )
        return userModel;
    })
    users.shift(); // Remove the header row
    return users
}