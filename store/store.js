import { getAllUsers } from "../controller/user.controller.js";
import { getSystemState } from "../controller/system.controller.js";
import systemModel from "../models/system.model.js";

export class UserStore {
    constructor() {
        this.users = [];
    }

    add(user) {
        
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

export class SystemStore {
    constructor() {
        this.system = new systemModel();
    }

    async update() {
        const state = await getSystemState();
        this.system = state;
    }

    getUser () {
        return this.system.user;
    }

    getNextUserId () {
        return this.system.nextUserId;
    }

    getNextPostId () {
        return this.system.nextPostId;
    }

    getLastBackupTimeApp () {
        return this.system.lastBackupTimeApp;
    }
}