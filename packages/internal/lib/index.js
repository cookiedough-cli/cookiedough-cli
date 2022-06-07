"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompt = void 0;
__exportStar(require("./copy-dir"), exports);
__exportStar(require("./sys-info"), exports);
__exportStar(require("./logger"), exports);
__exportStar(require("./subprocess"), exports);
__exportStar(require("./valid-write-path"), exports);
__exportStar(require("./config"), exports);
var inquirer_1 = require("inquirer");
Object.defineProperty(exports, "prompt", { enumerable: true, get: function () { return inquirer_1.prompt; } });
