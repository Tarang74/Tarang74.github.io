import data from '../data/parsed_data2022.json';

type NetworkNode = {
    nodes: Array<{
        name: string
    }>,
    links: Array<{
        source: string,
        target: string
    }>
};

type Unit = [string, Array<Array<string> | string>];

function updateOptions() {
    var input: string = select.value.toUpperCase();

    if (!appendUnits) {
        for (let i = 0; i < units.length; i++) {
            let a1: HTMLAnchorElement = document.createElement('a');
            a1.style.cssText = 'width:100%;height:50%;padding:0.5rem;';
            a1.textContent = units[i];

            let a2: HTMLAnchorElement = document.createElement('a');
            a2.style.cssText = 'width:100%;height:50%;padding:0.5rem;';
            a2.textContent = 'Unit Name';

            let div: HTMLDivElement = document.createElement('div');
            div.style.cssText = 'width:100%;display:flex;flex-direction:column;';
            div.appendChild(a1);
            div.appendChild(a2);

            let li: HTMLLIElement = document.createElement('li');
            li.id = i.toString();
            li.style.cssText = 'width:100%;height:6rem;';
            li.appendChild(div);

            ul.appendChild(li);
        }
        appendUnits = true;
    }
    
    var li = [...ul.getElementsByTagName("li")];
    li.forEach(element => {
        element.addEventListener('click', () => {addUnitsToSelection(parseInt(element.id)); closeOptions()});
    });

    if (input != '') {
        openOptions();
        for (let i = 0; i < li.length; i++) {
            if (units[i].indexOf(input) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}

function openOptions() {
    ul.style.display = '';
}

function closeOptions() {
    ul.style.display = 'none';
}

function addUnitsToSelection(l: number | Array<number>) {
    if (typeof(l) == 'object') {
        for (let i = 0; i < l.length; i++) {
            selectedUnits.push(units[l[i]]);
        }
    } else {
        selectedUnits.push(units[l]);
    }
}

function removeUnitFromSelection(unit: string) {
    selectedUnits.splice(selectedUnits.indexOf(unit));
}

function selectUnits(): NetworkNode {
    // // Find units in URL
    // var url = new URL(window.location.href);
    // selectedUnits = url.searchParams.get("units").split(',').map(Number);
    
    // Use indices to find nodes (and children)
    var recursiveUnits: Unit[] = [];
    for (let i = 0; i < selectedUnits.length; i++) {
        recursiveUnits.push([units[selectedUnits[i]], prerequisites[selectedUnits[i]]]);
    }

    var nodes = formatNode(findRecursive(recursiveUnits));
    console.log(nodes);
    
    return { nodes: [{ name: 'A' }], links: [{ source: 'A', target: 'B' }] };
}

function findRecursive(l: Unit[]): Array<[string, number, number]> {
    // Find all child nodes from 1-depth list of (node, child) pairs
    // (where child nodes may reference other top-level nodes)

    var nodes: Array<[string, number, number]> = [];

    for (let i = 0; i < l.length; i++) {
        /* Append root node */
        nodes.push([l[i][0], i, -1]);

        let lenJ: number = l[i][1].length;
        for (let j = 0; j < lenJ; j++) {
            // Disjunction
            let newNode: string;
            if (typeof (l[i][1][j]) == 'object') {
                // Conjunction
                console.log("Conjunction");
                let lenK: number = l[i][1][j].length;
                for (let k = 0; k < lenK; k++) {
                    newNode = l[i][1][j][k];
                    nodes.indexOf([newNode, i, j]) === -1 ? nodes.push([newNode, i, j]) : {};
                }
            } else if (typeof (l[i][1][j]) == 'string') {
                // String literal
                console.log("String");
                newNode = l[i][1][j] as string;
                nodes.indexOf([newNode, i, j]) === -1 ? nodes.push([newNode, i, j]) : {};
            }
        }
    }

    return nodes;
}

function formatNode(l: Array<[string, number, number]>): NetworkNode {

    return { nodes: [{ name: 'A' }], links: [{ source: 'A', target: 'B' }] }
}

// Units and corresponding prerequisites
var units: Array<string> = [];
var prerequisites: Array<Array<Array<string> | string>> = [];
data.Units.forEach((value, index, array) => { units.push(value.unit_code); prerequisites.push(value.prerequisites) });

var selectedUnits: Array<string> = [];

// Append units to search input
var appendUnits: boolean = false;

// Selection
/* Event listener */
const select = <HTMLInputElement>document.getElementById("select-units");
export var output: NetworkNode;

/* Options list */
var ul: HTMLElement = document.getElementById("select-options");

select.addEventListener("input", updateOptions);
select.addEventListener("blur", updateOptions);