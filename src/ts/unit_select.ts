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

    if (input != '') {
        let hidden: number = 0;
        let visible: Array<number> = [];

        openOptions();

        for (let i = 0; i < units.length; i++) {
            if (units[i].indexOf(input) > -1) {
                visible.push(i);
            } else {
                hidden++;
            }
        }

        if (hidden == units.length) {
            // No units found
            closeOptions();
        } else {
            for (let i = 0; i < visible.length; i++) {
                let a1: HTMLAnchorElement = document.createElement('a');
                a1.textContent = units[visible[i]];

                let a2: HTMLAnchorElement = document.createElement('a');
                a2.textContent = 'Unit Name';

                let div: HTMLDivElement = document.createElement('div');
                div.appendChild(a1);
                div.appendChild(a2);

                let li: HTMLLIElement = document.createElement('li');
                li.id = visible[i].toString();
                li.appendChild(div);

                ul.appendChild(li);
            }

            var li = [...ul.getElementsByTagName("li")];
            li.forEach(element => {
                element.addEventListener('click', () => { addUnitsToSelection(parseInt(element.id)); closeOptions() });
            });
        }
    } else {
        closeOptions();
    }
}

function checkForScroll() {
    let selectContainer = document.getElementById("select-units-container");
    let dim = selectContainer.getBoundingClientRect();
    let top = dim.y + dim.height;

    ul.parentElement.style.top = `${top.toString()}px`;
}

function openOptions() {
    clearOptions();
    ul.style.display = '';
}

function clearOptions() {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
}

function closeOptions() {
    clearOptions(); 
    ul.style.display = 'none';
}

function addUnitsToSelection(l: number | Array<number>) {
    if (typeof (l) == 'object') {
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

// Selection
/* Event listener */
const select = <HTMLInputElement>document.getElementById("select-units");
export var output: NetworkNode;

/* Options list */
var ul: HTMLElement = document.getElementById("select-options");

select.addEventListener("input", () => {updateOptions(); checkForScroll()});
select.addEventListener("blur", closeOptions);

document.addEventListener("click", closeOptions);
closeOptions();