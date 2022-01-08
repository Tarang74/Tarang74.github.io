import data from './parsed_data2022.json';

export function updateOptions(select: HTMLInputElement) {
    return new Promise((resolve) => {
        checkForScroll();

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
                resolve(false);
            } else {
                let li: Array<HTMLElement> = [];
                for (let i = 0; i < visible.length; i++) {
                    let a1: HTMLAnchorElement = document.createElement('a');
                    a1.textContent = units[visible[i]];

                    let a2: HTMLAnchorElement = document.createElement('a');
                    a2.textContent = 'Unit Name';

                    let div: HTMLDivElement = document.createElement('div');
                    div.appendChild(a1);
                    div.appendChild(a2);

                    li[i] = document.createElement('li');
                    li[i].id = visible[i].toString();
                    li[i].appendChild(div);

                    ul.appendChild(li[i]);
                }

                li.forEach((element) => {
                    element.addEventListener(
                        'click',
                        () => {
                            addUnitsToSelection(
                                element.id as unknown as number
                            );
                            resolve(true);
                        },
                        true
                    );
                });

                document.addEventListener('click', () => {
                    closeOptions();
                    resolve(false);
                });
            }
        } else {
            closeOptions();
            resolve(false);
        }
    });
}

function checkForScroll() {
    let selectContainer = document.getElementById('select-units-container');
    let dim = selectContainer.getBoundingClientRect();
    let top = dim.y + dim.height;

    ul.parentElement.style.top = `${top.toString()}px`;
}

function clearOptions() {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
}

function openOptions() {
    clearOptions();
    ul.style.display = '';
}

function closeOptions() {
    clearOptions();
    ul.style.display = 'none';
}

function addUnitsToSelection(s: number) {
    selectedUnits.push(s);
    closeOptions();
}

function removeUnitFromSelection(unit: number) {
    selectedUnits.splice(selectedUnits.indexOf(unit));
}

export function getUnitData(): Unit[] {
    // // Find units in URL
    // var url = new URL(window.location.href);
    // selectedUnits = url.searchParams.get("units").split(',').map(Number);

    // Use indices to find nodes (and children)
    var recursiveUnits: Unit[] = [];
    for (let i = 0; i < selectedUnits.length; i++) {
        recursiveUnits.push([
            units[selectedUnits[i]],
            prerequisites[selectedUnits[i]]
        ]);
    }
    return recursiveUnits;
}

// Units and corresponding prerequisites
var units: Array<string> = [];
var prerequisites: Array<Array<Array<string> | string>> = [];
data.Units.forEach((value, index, array) => {
    units.push(value.unit_code);
    prerequisites.push(value.prerequisites);
});

var selectedUnits: Array<number> = [];

// Options list
var ul: HTMLElement = document.getElementById('select-options');

// Initialise ul
closeOptions();
