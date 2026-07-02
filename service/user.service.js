import fs from "fs/promises";

export const getAllUsers = async () => {
    const usersData = await fs.readFile("./data/users.csv", "utf8");
    const users = usersData.split("\n").map(line => {
        const [id, name, email] = line.split(",");
        return { id, name, email };
    })
    return users
}