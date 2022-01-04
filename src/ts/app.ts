import { updateOptions, getUnitData } from './unit_select';
import * as d3 from 'd3';
import { D3DragEvent, DragBehavior, SimulationNodeDatum, SubjectPosition } from 'd3';

const container = document.getElementById("app");
const width = container.clientWidth;
const height = container.clientHeight;

const minZoom = 0.5;
const maxZoom = 7;

const svg = d3
    .select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

svg
    .append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('viewBox', [0, 0, 20, 20])
    .attr('refX', 10)
    .attr('refY', 10)
    .attr('markerWidth', 10)
    .attr('markerHeight', 10)
    .attr('orient', 'auto-start-reverse')
    .append('line');

const rectWidth = 25;
const rectHeight = 15;

function updateCanvas(json: NetworkNode) {
    return new Promise(() => {
        // Simulation object
        var simulation = d3.forceSimulation(json.nodes as d3.SimulationNodeDatum[]);

        // Forces
        var chargeForce = d3.forceManyBody().strength(-200);
        var centerForce = d3.forceCenter(width / 2, height / 2);
        var linkForce = d3.forceLink(json.links).id((d: any) => d.name);

        simulation
            .force('charge_force', chargeForce)
            .force('center_force', centerForce)
            .force('links', linkForce);

        // Main group
        var g = svg.append('g')
            .attr('class', 'zoom-group');

        // Node group
        var node = g
            .append('g')
            .attr('class', 'nodes')
            .selectAll('.nodes')
            .data(json.nodes)
            .enter()
            .append('g')
            .attr('transform', (d: any) => `translate(${d.x}, ${d.y})`)

        // Node rect
        node
            .append('rect')
            .attr('class', 'node')
            .attr('height', rectHeight)
            .style('fill', d => d.group != undefined ? d.group : 'blue')

        // Node text
        node
            .append('text')
            .text(d => d.name)
            .style('font-size', '12px')
            .attr('dy', '1em');

        node        
            .attr('width', d => this.childNodes[1].getComputedTextLength() + 20)

        // Link line
        var link = g
            .append('g')
            .attr('class', 'links')
            .selectAll('.links')
            .data(json.links)
            .enter()
            .append('line')
            .attr('class', 'disjunctive-group')
            .attr('marker-start', 'url(#arrow)')
            .attr('fill', 'none');

        // Global events
        var dragHandler = d3.drag()
            .on('start', (event: D3DragEvent<SVGSVGElement, SimulationNodeDatum, SubjectPosition>, d: d3.SimulationNodeDatum) => {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            })
            .on('drag', (event: D3DragEvent<SVGSVGElement, SimulationNodeDatum, SubjectPosition>, d: d3.SimulationNodeDatum) => {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on('end', (event: D3DragEvent<SVGSVGElement, SimulationNodeDatum, SubjectPosition>, d: d3.SimulationNodeDatum) => {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            });
        dragHandler(node);

        var zoomHandler = d3
            .zoom()
            .on('zoom', event => g.attr('transform', event.transform))
            .scaleExtent([minZoom, maxZoom]);
        zoomHandler(svg);

        // Initialise simulation
        simulation.on('tick', () => {
            node
                .attr('transform', (d: any) => `translate(${d.x}, ${d.y})`);

            link
                .attr('x1', (d: any) => d.source.x)
                .attr('y1', (d: any) => d.source.y)
                .attr('x2', (d: any) => d.target.x)
                .attr('y2', (d: any) => d.target.y);
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
selectElement.addEventListener("focus", () => {
    if (selectElement.value != '') {
        selection();
    }
});