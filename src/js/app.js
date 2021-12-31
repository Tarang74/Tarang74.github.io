import tree from 'd3'

var data = []



var treeData = {
    "name": "A", 
    "info": "tst", 
    "children": [
        {
            "name": "A1", 
            "children": [
                { "name": "A12" },
                { "name": "A13" },
                { "name": "A14" },
                { "name": "A15" },
                { "name": "A16" }
            ]
        },
        {
            "name": "A2", 
            "children": [
                { "name": "A21" },
                {
                    "name": "A22", 
                    "children": [
                        { "name": "A221" },
                        { "name": "A222" },
                        { "name": "A223" },
                        { "name": "A22" }
                    ]
                },
                { "name": "A23" },
                { "name": "A24" },
                { "name": "A25" }]
        },
        {
            "name": "A3", 
            "children": [
                {
                    "name": "A31", 
                    "children": [
                        { "name": "A311" },
                        { "name": "A312" },
                        { "name": "A313" },
                        { "name": "A314" },
                        { "name": "A315" }
                    ]
                }]
        }
    ]
};

// Create a svg canvas
var vis = d3.select(".app").append("svg:svg")
    .attr("width", 400)
    .attr("height", 400)
    .append("svg:g")
    .attr("transform", "translate(200, 200)");

// Create a cluster "canvas"
var cluster = d3.layout.cluster()
    .size([300, 150]);

var diagonal = d3.svg.diagonal.radial()
    .projection(function (d) { return [d.y, d.x / 180 * Math.PI]; });

var nodes = cluster.nodes(treeData);
var links = cluster.links(nodes);

var link = vis.selectAll("pathlink")
    .data(links)
    .enter().append("svg:path")
    .attr("class", "link")
    .attr("d", diagonal)

var node = vis.selectAll("g.node")
    .data(nodes)
    .enter().append("svg:g")
    .attr("transform", function (d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

// Add the dot at every node
node.append("svg:circle")
    .attr("r", 3.5);

node.append("svg:text")
    .attr("dx", function (d) { return d.x < 180 ? 8 : -8; })
    .attr("dy", ".31em")
    .attr("text-anchor", function (d) { return d.x < 180 ? "start" : "end"; })
    .attr("transform", function (d) { return d.x < 180 ? null : "rotate(180)"; })
    .text(function (d) { return d.name; });