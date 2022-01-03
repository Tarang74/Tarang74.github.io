import { updateOptions, getUnitData } from './unit_select';
import { select } from 'd3';

function updateCanvas(json) {
    return new Promise(() => {
        var vis = select('#graph-group').attr('transform', 'translate(20, 20)');

        // Build initial link elements - Build first so they are under the nodes
        var links = vis.selectAll('line.link').data(json.links);
        links.enter().append('line').attr('class', 'link').attr('stroke', '#000');

        // Build initial node elements
        var nodes = vis.selectAll('g.node').data(json.nodes);
        nodes.enter().append('g').attr('class', 'node').append('circle').attr('r', 10).append('title').text(function (d) {
            return d.name;
        });

        // Store nodes in a hash by name
        var nodesByName = {};
        nodes.each(function (d) {
            nodesByName[d.name] = d;
        });

        // Convert link references to objects
        links.each(function (link) {
            link.source = nodesByName[link.source];
            link.target = nodesByName[link.target];
            if (!link.source.links) {
                link.source.links = [];
            }
            link.source.links.push(link.target);
            if (!link.target.links) {
                link.target.links = [];
            }
            link.target.links.push(link.source);
        });

        // Compute positions based on distance from root
        var setPosition = function (node, i, depth) {
            if (!depth) {
                depth = 0;
            }
            if (!node.x) {
                node.x = (i + 1) * 40;
                node.y = (depth + 1) * 40;
                if (depth <= 1) {
                    node.links.each(function (d, i2) {
                        setPosition(d, i2, depth + 1);
                    });
                }

            }

        };
        nodes.each(setPosition);

        // Update inserted elements with computed positions
        nodes.attr('transform', function (d) {
            return 'translate(' + d.x + ', ' + d.y + ')';
        });

        links.attr('x1', function (d) {
            return d.source.x;
        }).attr('y1', function (d) {
            return d.source.y;
        }).attr('x2', function (d) {
            return d.target.x;
        }).attr('y2', function (d) {
            return d.target.y;
        });
    });
}

function findNodesRecursively(l: Unit[]): Array<[string, number, number]> {
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
                let lenK: number = l[i][1][j].length;
                for (let k = 0; k < lenK; k++) {
                    newNode = l[i][1][j][k];
                    nodes.indexOf([newNode, i, j]) === -1 ? nodes.push([newNode, i, j]) : {};
                }
            } else if (typeof (l[i][1][j]) == 'string') {
                // String literal
                newNode = l[i][1][j] as string;
                nodes.indexOf([newNode, i, j]) === -1 ? nodes.push([newNode, i, j]) : {};
            }
        }
    }

    return nodes;
}

function formatNode(l: Array<[string, number, number]>): NetworkNode {
    var network: NetworkNode = { nodes: [], links: [] };
    var currentHeadIndex = -1;
    var currentHead = '';

    l.forEach(element => {
        network.nodes.map(e => e.name).indexOf(element[0]) === -1 ? network.nodes.push({ name: element[0] }) : {};
        if (element[1] != currentHeadIndex) {
            // Head node
            currentHead = element[0];
            currentHeadIndex++;
        } else {
            // Children of head node
            network.links.push({ source: currentHead, target: element[0], group: element[2] });
        }
    });

    return network;
}

function selection() {
    updateOptions(selectElement).then(resolve => {
        if (resolve) {
            var requiredNodes: Unit[] = [];
            requiredNodes = getUnitData();
            output = formatNode(findNodesRecursively(requiredNodes));

            console.log(output);
            updateCanvas(output).then();
        }
    });
}

// Selection
/* Event listener */
const selectElement = <HTMLInputElement>document.getElementById("select-units");
export var output: NetworkNode;

selectElement.addEventListener("input", selection);