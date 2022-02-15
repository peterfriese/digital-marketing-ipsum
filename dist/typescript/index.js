"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIpsum = void 0;
var helpers_1 = __importDefault(require("./helpers"));
var verbData = __importStar(require("../data/verbs.json"));
var nounData = __importStar(require("../data/nouns.json"));
var joinData = __importStar(require("../data/joins.json"));
var actionData = __importStar(require("../data/actions.json"));
var verbs = verbData;
var nouns = nounData;
var joins = joinData;
var actions = actionData;
var generateSentence = function () {
    var verb = helpers_1.default.titleCase(helpers_1.default.randomFromArray(verbs)), noun = helpers_1.default.randomFromArray(nouns), join = helpers_1.default.randomFromArray(joins), join2 = helpers_1.default.randomFromArray(joins), action = helpers_1.default.randomFromArray(actions), action2 = helpers_1.default.randomFromArray(actions);
    return (Math.random() < 0.5)
        ? "".concat(verb, " ").concat(noun, " ").concat(join, " ").concat(action, " ").concat(join2, " ").concat(action2, ". ")
        : "".concat(verb, " ").concat(noun, " ").concat(join, " ").concat(action, ". ");
};
var generateParagraph = function (opts) {
    var sentences = helpers_1.default.randomIntInRange(opts.sentenceMin, opts.sentenceMax);
    return helpers_1.default.range(sentences).map(function (i) { return generateSentence(); }).join(' \n\n');
};
var generateIpsum = function (opts) {
    var defaultOpts = { paragraphs: 6, sentenceMin: 3, sentenceMax: 12 };
    var mergedOpts = __assign(__assign({}, defaultOpts), opts);
    return helpers_1.default.range(mergedOpts.paragraphs).map(function (i) { return generateParagraph(mergedOpts); }).join('');
};
exports.generateIpsum = generateIpsum;
