// javascript

let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 500, svgHeight = 300, barPadding = 5;

let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)

let xScale = d3.sclaeLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth]);

let yScale = d3.sclaeLinear()
    .domain([0, d3.max(data)])
    .range([0, svgHeight, 0]);

let x_axis = d3.axisBottom()
.scale(yScale);

let y_axis = d3.axisLeft()
.scale(yScale);

svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);

let xAxisTranslate = svgHeight - 20;

avg.append("g")
    .attr("transfrom", "translate(50, " + xAxisTranslate +")")
    .call(x_axis);