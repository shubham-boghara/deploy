"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.$server = exports.$security = exports.$db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const config_json_1 = __importDefault(require("./config.json"));
dotenv_1.default.config();
const { DB_DATABASE } = process.env;
const db = {
    database: DB_DATABASE
};
const { security, server } = config_json_1.default;
exports.$db = db;
exports.$security = security;
exports.$server = server;
//# sourceMappingURL=index.js.map