"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MemberModel = () => {
    const Member = new mongoose_1.Schema({
        date: {
            type: Date,
            required: true,
            default: Date.now
        },
        month: {
            type: Number,
            required: true,
        },
        username: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true,
            default: "xyz"
        },
        phonNumber: {
            type: String,
            required: true
        },
    });
    const MModel = mongoose_1.model("Member", Member);
    return MModel;
};
exports.default = MemberModel;
//# sourceMappingURL=member.js.map