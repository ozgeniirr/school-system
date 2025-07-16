"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUser = void 0;
const User_1 = require("./User");
class AdminUser extends User_1.User {
    constructor(name, age) {
        super(name, age);
    }
    introduce() {
        return `Ben ${this.name}, sistem yöneticisiyim.`;
    }
}
exports.AdminUser = AdminUser;
