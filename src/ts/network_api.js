"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataToNetwork = void 0;
const parsed_data2022_json_1 = __importDefault(require("../data/parsed_data2022.json"));
var units = [];
parsed_data2022_json_1.default.Units.forEach((value, index, array) => units.push([value.unit_code, value.prerequisites]));
console.log(units);
function findUnique(l) {
    return [...new Set(l)];
}
function dataToNetwork(units) {
    var recursiveUnits = [];
}
exports.dataToNetwork = dataToNetwork;
//# sourceMappingURL=network_api.js.map