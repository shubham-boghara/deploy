"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const member_1 = __importDefault(require("./member"));
const config_1 = require("../../config");
const data_1 = __importDefault(require("./data"));
const { database } = config_1.$db;
const password = process.env.PASSWORD;
const url = `mongodb+srv://sbm:${password}@main.kw3r3.mongodb.net/easy-shop?retryWrites=true&w=majority`;
const connect = mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.set('useFindAndModify', false);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log("✅  Connected to DB"); });
const models = {
    Member: member_1.default(),
    Data: data_1.default(),
};
exports.default = models;
//# sourceMappingURL=index.js.map