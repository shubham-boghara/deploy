"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const resolvers_1 = __importDefault(require("./graphql/resolvers"));
const types_1 = __importDefault(require("./graphql/types"));
const config_1 = require("../config");
const models_1 = __importDefault(require("./models"));
require("./models/index");
const schema = apollo_server_1.makeExecutableSchema({
    typeDefs: types_1.default,
    resolvers: resolvers_1.default
});
const apolloServer = new apollo_server_1.ApolloServer({
    schema,
    context: { models: models_1.default }
});
apolloServer.listen(config_1.$server).then(({ url }) => {
    console.log(`Running on ${url}`);
});
//# sourceMappingURL=index.js.map