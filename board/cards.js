d3.text("/data/stats.csv", "text/csv", function(err, txt) {
  var data = d3.csv.parseRows(txt).map(function(d) {
    return  {
      title: d[0],
      value: d[1],
      subtext: d[2],
      special: d[3],
      color: d[4] || null
    };
  });

  var cards = d3.select("#cards")
      .selectAll("li").data(data)
    .enter().append("li");

  cards.append("h2")
    .html(function(d) { return d.title; });

  cards.append("div")
    .attr('class', "value")
    .html(function(d) { return d.value; });

  cards.append("div")
    .attr('class', "subtext")
    .html(function(d) { return d.subtext; });

  cards.each(function(d) {
    if (!Number(d.special)) return;
    this.style.boxShadow = "0 0 12px " + (d.color ? d.color : "rgba(255, 215, 0, 0.8)");
  });

});