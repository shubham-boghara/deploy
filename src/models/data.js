"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DataModel = () => {
    const Data = new mongoose_1.Schema({
        created: {
            type: Date,
            required: true,
            default: Date.now
        },
        memberId: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Member",
            required: true,
        },
        date: {
            type: String,
            required: true,
            default: new Date().toLocaleDateString()
        },
        month: {
            type: Number,
            required: true
        },
        total_p: {
            type: Number,
            required: true,
            default: 0
        },
        design: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        return_p: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        amount: {
            type: "Number",
            required: true,
            default: 0
        },
        member_amount: {
            type: "Number",
            required: true,
            default: 0
        }
    });
    const DModel = mongoose_1.model("Data", Data);
    return DModel;
};
exports.default = DataModel;
//# sourceMappingURL=data.js.map