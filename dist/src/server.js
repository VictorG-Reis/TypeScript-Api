"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const PORT = process.env.PORT || 3000;
const server = App_1.default.listen(PORT, () => {
    console.log('server is running on port', PORT);
});
exports.default = server;
