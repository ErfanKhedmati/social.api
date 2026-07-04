import { getAllUsers, addUser } from "../controller/user.controller.js";
import { getSystemState } from "../controller/system.controller.js";
import systemModel from "../models/system.model.js";

export class UserStore {
    constructor() {
        this.users = [];
    }

    async add(user) {
        const newUser = await addUser(user);
        console.log(newUser);
        
        if (newUser.success) {
            this.users.push(newUser.user);
            return { success: true, user: newUser.user };
        } else {
            return { success: false, user: null };
        }
    }

    remove(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    async update() {
        this.users = await getAllUsers();
    }

    getAllUsers() {
        return this.users;
    }
}

export class SystemStore {
    constructor() {
        this.system = new systemModel();
    }

    async update() {
        const state = await getSystemState();
        this.system = state;
    }

    getUser() {
        return this.system.user;
    }

    getNextUserId() {
        return this.system.nextUserId;
    }

    getNextPostId() {
        return this.system.nextPostId;
    }

    getLastBackupTimeApp() {
        return this.system.lastBackupTimeApp;
    }

    icreaseUserId() {
        this.system.nextUserId += 1;
    }
}