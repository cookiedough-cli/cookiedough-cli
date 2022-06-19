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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinners = exports.useSpinner = void 0;
const node_readline_1 = __importDefault(require("node:readline"));
const node_process_1 = require("node:process");
const T_BASE = (0, 0);
let tick = 0;
function wait(ms) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
function useClear(rl) {
    node_readline_1.default.cursorTo(rl, T_BASE);
    node_readline_1.default.clearLine(rl, 0);
}
function useTick(rline, val) {
    useClear(rline);
    rline.write(`${val}`);
    tick++;
}
function useSpinner(spinner_type, cb, iter_ct) {
    var e_1, _a, e_2, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const ict = iter_ct || 1;
        const rline = node_readline_1.default.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
        const { interval, frames } = spinner_type;
        try {
            for (var _c = __asyncValues(Array(ict)), _d; _d = yield _c.next(), !_d.done;) {
                const _ = _d.value;
                try {
                    for (var frames_1 = (e_2 = void 0, __asyncValues(frames)), frames_1_1; frames_1_1 = yield frames_1.next(), !frames_1_1.done;) {
                        const frame = frames_1_1.value;
                        yield wait(interval * tick, useTick(rline, frame));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (frames_1_1 && !frames_1_1.done && (_b = frames_1.return)) yield _b.call(frames_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) yield _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        rline.close();
        tick = 0;
        if (cb) {
            return cb();
        }
        return;
    });
}
exports.useSpinner = useSpinner;
exports.spinners = __importStar(require("cli-spinners"));
