"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const typesArray = load_files_1.loadFilesSync(path_1.default.join(__dirname, './'), { extensions: ['graphql'] });
exports.default = merge_1.mergeTypeDefs(typesArray);
//# sourceMappingURL=index.js.map