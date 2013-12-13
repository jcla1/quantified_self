d3.csv("/data/computer_probability.csv", function(err, data) {
  var margin = {top: 20, right: 20, bottom: 40, left: 20},
    width = 750 - margin.left - margin.right,
    height = 170 - margin.top - margin.bottom;

  var formatTime = formatTime = d3.time.format("%H:%M"),
    formatHours = function(d) { return formatTime(new Date(2013, 0, 1, ~~(d/3600), d%60)) };

  var x = d3.scale.linear()
    .domain([0, 86400])
    .range([0, width]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .ticks(7)
    .orient("bottom")
    .tickFormat(formatHours);

  var y = d3.scale.linear()
    .domain([0, d3.max(data, function(d) { return parseInt(d.occ); })])
    .range([height, 0]);

  window.data = data;
  window.y = y;

  var svg = d3.select("#computer_probability").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // var bar = svg.selectAll(".bar")
  //   .data(data)
  // .enter().append("g")
  //   .attr("class", "bar")
  //   .attr("transform", function(d) { return "translate(" + x(parseInt(d.timestart)) + "," + y(parseInt(d.occ)) + ")"; });

  // bar.append("rect")
  //   .attr("x", 0)
  //   .attr("width", 1)
  //   .attr("height", function(d) { return height - y(parseInt(d.occ)); });

  var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(parseInt(d.timestart)); })
    .y(function(d) { return y(parseInt(d.occ)); });

  var area = d3.svg.area()
    .interpolate("monotone")
    .y0(height)
    .x(function(d) { return x(parseInt(d.timestart)); })
    .y1(function(d) { return y(parseInt(d.occ)); });

  svg.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area);

  svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

});