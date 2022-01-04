import { updateOptions, getUnitData } from './unit_select';
import * as d3 from 'd3';

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

function updateCanvas(json) {
    return new Promise(() => {
        var simulation = d3
            .forceSimulation()
            .nodes(json.nodes);

        var linkForce = d3
            .forceLink()
            .links(json.links)
            .id((d:any) => d.name);

        var chargeForce = d3
            .forceManyBody()
            .strength(-200);

        var centerForce = d3.forceCenter(width / 2, height / 2);

        simulation
            .force('charge_force', chargeForce)
            .force('center_force', centerForce)
            .force('links', linkForce);

        simulation.on('tick', tickActions);

        var g = svg.append('g')
            .attr('class', 'all');

        var link = g
            .append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(json.links)
            .enter()
            .append('line')
            .attr('stroke-width', 6)
            .attr('stroke', linkColor)
            .attr('marker-start', 'url(#arrow)')
            .attr('fill', 'none');

        var nodeGroup = g
            .append('g')
            .attr('class', 'nodes')
            .selectAll('rect')
            .data(json.nodes)
            .enter()

        var node = nodeGroup
            .append('rect')
            .attr('width', rectWidth)
            .attr('height', rectHeight)
            .style('fill', fillColor)
            .style('stroke', 'white')
            .on('mouseover', d => console.log(d));

        var nodeText = nodeGroup
            .append('text')
            .text(json.nodes.name)

        var dragHandler = d3.drag()
            .on('start', dragStart)
            .on('drag', dragDrag)
            .on('end', dragEnd);
        dragHandler(node);

        var zoomHandler = d3.zoom().on('zoom', zoomActions).scaleExtent([minZoom, maxZoom]);
        zoomHandler(svg);

        function fillColor(d) {
            return 'blue';
        }
        SVGCircleElement
        function linkColor(d) {
            if (d.group == 0) {
                return 'green';
            } else {
                return 'red';
            }
        }

        function dragStart(event, d) {
            console.log('dragEnd');
            console.log(event);
            console.log(d);
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        
        function dragDrag(event, d) {
            console.log('dragEnd');
            console.log(event);
            console.log(d);
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragEnd(event, d) {
            console.log('dragEnd');
            console.log(event);
            console.log(d);

            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        function zoomActions(event) {
            g.attr('transform', event.transform);
        }

        function tickActions() {
            node
                .attr('cx', (d:any) => {console.log('tick actions'); console.log(d); return d.x;})
                .attr('cy', (d:any) => d.y);
            nodeText
                .attr('cx', (d:any) => {console.log('tick actions'); console.log(d); return d.x;})
                .attr('cy', (d:any) => d.y);

            link
                .attr('x1', (d:any) => d.source.x)
                .attr('y1', (d:any) => d.source.y)
                .attr('x2', (d:any) => d.target.x)
                .attr('y2', (d:any) => d.target.y);
        }

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