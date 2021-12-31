import data from '../data/parsed_data2022.json';

var units = [];
data.Units.forEach((value, index, array) => units.push([value.unit_code, value.prerequisites]));
console.log(units);

function findUnique(l:string[]) {
    return [... new Set(l)];
}

function findRecursive(l:string[]):string[] {
    // Find all child nodes from 1-depth list of (node, child) pairs
    // (where child nodes may reference other top-level nodes)

    return [];
}

export function dataToNetwork(selected_units:number[]):string[] {
    // Use indices to find nodes (and children) 
    
    var recursiveUnits: string[] = [];
    for (let i = 0; i < selected_units.length; i++) {
        recursiveUnits.push(units[selected_units[i]]);
    }

    return [];
}