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
function findRecursive(l) {
    // Find all child nodes from 1-depth list of (node, child) pairs
    // (where child nodes may reference other top-level nodes)
    return [];
}
function dataToNetwork(selected_units) {
    // Use indices to find nodes (and children) 
    var recursiveUnits = [];
    for (let i = 0; i < selected_units.length; i++) {
        recursiveUnits.push(units[selected_units[i]]);
    }
    return [];
}
exports.dataToNetwork = dataToNetwork;
//# sourceMappingURL=network_api.js.map