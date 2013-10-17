//d3.csv("mouse_pos.csv", function(err, data) {
d3.json("mouse.json", function(err, data) {
  var margin = {top: 10, right: 20, bottom: 10, left: 20},
  width = 860 - margin.left - margin.right,
  height = 520 - margin.top - margin.bottom;

  //data = data.map(function(a) {
  //  return {x: parseInt(a.x), y: parseInt(a.y)};
  //});

  var color = d3.scale.linear()
    .domain([0, 50])
    .range(["white", "red"])
    .interpolate(d3.interpolateLab);

  var x = d3.scale.linear()
    .range([0, width])
    .domain([0, 1280]);

  var y = d3.scale.linear()
    .range([0, height])
    .domain([0, 800]);

  //data = data.map(function(a) {
  //  return [x(a.x), y(a.y)];
  //});

  var hexbin = d3.hexbin()
    .size([width, height])
    .radius(5);

  var svg = d3.select("#mouse_heatmap").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("class", "mesh")
    .attr("width", width)
    .attr("height", height);

  svg.append("g")
    .attr("clip-path", "url(#clip)")
  .selectAll(".hexagon")
    .data(data)
  .enter().append("path")
    .attr("class", "hexagon")
    .attr("d", hexbin.hexagon())
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
    .style("fill", function(d) { return color(d.n); });
});