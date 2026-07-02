import { getAllUsers } from "../controller/user.controller.js";
export class UserStore {
    constructor() {
        this.users = [];
    }

    add(user) {
        this.users.push(user);
    }

    remove(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    update() {
        this.users = getAllUsers();
    }

    getAllUsers() {
        return this.users;
    }
}