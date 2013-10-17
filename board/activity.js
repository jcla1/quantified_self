var icons = {
  "iTerm": "data:image/png;base64,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",
  "Xcode": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC4UlEQVQ4T6WTT2gcdRTHP7+Z2dnZ2U3S3Sa7G02L1HZTi1FaqWtpLYoHT7ZeFKyI4NVTjQY8qOhFKnpRxIOIl+LBelGh4EVUDBJtlWibmiZNbDaum2R3sv9mZ2d2dp6HtFJKbn7ge3mHLzze+ygR4f9g3D64Fdu2iw8Wj3w4XiiMJ5OpaGbm5z8vXvzlM9/3PhKRAAAR2TbjJ14Y0GPWTMwemsmMFWYnX54KHceRpeslOXrseAM4BGQUkDj4/JlTO4ZzBTNhF3RrcI+VzIz6khxAi8d6GHp6UMNrlnjviTs5/dIUv87O8fZbrzL1yuR5Bex/9I3vfzswcZ+VsmP0IgPd0Nj0FPfmNCptKLcF8/JZ7jaqnFvMkz98nG9fe+xKd2PhdQ2oR33fyaWTdJRNT4ux6RvoQC4FjxcgYTQ5dWwvn5z9kuKJk+QGB9j77AfTIvKFBri19UpVVxG6CESKThiRtRUpU/HNXEB2/TvcdpP8oSexbQNDV6Ti1lEADfBdp7LmdQNCUWj0GbVgzwi0u31cz+HTN0/z9DPPsev+h0nTw9QMYqq3G7bO2HNr5X+cdkhmR8TujI4uwpAF1zZCVqY/Z2QkTRQf4/DEHSw0LXQVEIoWA9BERDr18orT6uIFwtJGHz+Chtdn/u81fv/6Y2pVh/Q9j5Ad0pEoxOkKVtySmysQ1sulsBegKyHsCzsTMLfqMv/TeXaNDrNebZLdd5BrXo7imE7OVlRaEUopSwPouvW/PLcdrrkR+UENt+Oz3DK4dO4MrtsilTvA2MRDrFZD/igFeF6frG2awPDWK7v1itfxfYK+0W4LV+tCfGOWu3IpFheXyRdfJPDq0fJCqVspXa/V18uL1ZXlWaBxo2B1c3P1qjOSMIwflyAKu90f3j05cOSB/VqjcbnemL7w1PyFS/M4UU3kqw7/8f6WC4AN7AN2AnFAN03zHdM0W8Dk7Z7cGnWjYFuUUikgkJvmbcO/lQx0AtIOR1YAAAAASUVORK5CYII=",
  "All Programs": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABxklEQVQ4y+2Sz2pTQRTGf2fuTW7qH6hIit4Itrp1Y9uNgi6UuLGgLuzClWv7IkJd+QDq3jew0OLGIkgfwFWhosVqQojmtrlzznFxk2hoH8GBD+YwZ35838yB/0vGm1ev39w8f3H+bdbI8iABCYJIdXx6JqOR1XF3hsPh1297u48fPXzwASAdA/I8bz/f+JIPYjK6DCIV5Na1FrNnGpg5qWh+Z/5SG5gGBBEKMw4l4O64gZpRSwI/fx9x0C9QNeqi3F2Ym0RI/83TOSr5FZUYFVVDo9I82+Dz3gFuhrnTSAy35nGA4+x3+gxKwVVxM9yMmaDsHhbgDu40gmJmJwDcOer1UQuTZnA6P4ZTdSaKmh4HmDlPblwmWvVwAogAXrlzc9yNVBzTExwURdF9enuBEAIhCQT5+42VAcOsUqfb7R4D1Gr11TKWBBFiEalnGQLEGAkhoKo4kCQJiKwCLyeDtL7+on1/ZeWdSJhY29n5hMZImqZcX1yemj53Y2tz897a2rONFODj9vaVpaXlwey52VPjplbeoowRAYpiMAXo9XqD91tbV4ENAbjQnEvTWi1NkpCOYiWVxpbcAB0pmlosyzLuH3yPfwDhOOaPPU9BWgAAAABJRU5ErkJggg==",
  "Google Chrome": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACmklEQVQ4y6XTTUjTARzG8X+JNaxQs2WJIVgu7U3/5t7btBVuc3rIDmaR0csOQafMIvBSBkKXCmmEUKAVUmYvlLZoSyVGZr5taos0l00HNpEiioJt326+kBjR4bn8Dp/Dj+cRAOF/8sdhaKdcHLboHCP7jIweLMB3wMyHPQbe71Y4vJoscUHAu1Vm8yozGd6lJFhiZnK/hWBJAZ+LjQzpshnMzKA/bb1tXiAQtdr2NiWFMbWccb2KcYOGQJ6KgF5JQKtiTK7Av02kT5pM79Ik2xwgp0krWq0yJtak4U/fxKhMhn9dElNlpQT3GvHpE/HpUhnRyfBp0+hNlzJQGitOA+oGjTOrWc+Tzal8SkhmItcAkTAdU9D5BSDCVFcOQdcyvrpjCXYKBN8IzmlAc0uNqd3CgdMig0I0AMW1Xo7WebHWv+PknVEgAh6B8EA04X4JwXaBaUB7U03hczN5L/KpO1RE81AIfdUrSmq6KanpIa+qg8ZuYDSPkHsxIY+EYNssQH1DRdEzM6bn+ZQ3HeNx3w9kp16gPe9ix3kXsopW6jtCc4AJ5yxAeU1Jod2MxW5E36wCQHrkLiutjSRYG4k7+gAA+gRCniWEPBLGWqJmgJxLCqfutpZCuxlji4HjrsMANDj83HKO8T0E3wa3EnELhPslTLYtwnc/ZuaJWRe2i4orCgofm7DYTRhbDOQ+UVHZW8GJl2e40CCFAYGQZym/elbw8b4Eb32cOKdIW85l2+RXFFgemrC0mCmwGzE8zaf4ngY8UeCO4WdnPCNNMbivr7LNW+X0StEmVuegvabG1GRCeddCf2sy4Y4E/I+WM1gXT9fVRNuCY1pfniluPJvl2FCZTVl1Br7aeLpqVvP6cqLDdXGt+Nc1/mt+A5t8oJ7W5c/CAAAAAElFTkSuQmCC",
  "Activity Monitor": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACSklEQVQ4EQXBsWtdVRwA4O+ce959sa2x1rbWUkFUFBRBcRBcJCg46NJZOgou4ihCN0cHIVR09h9xsIoUnVwclCpt0xCbmLz05fXde8/5+X0pIgAAAAAAAABAun79ekDf90gkEgAAACIgDMMIytbWuwBaa0qZ6bqMJCUggohAaK2ptQIot2//A77+blts9Dxai9WgPHNWO1waHzVpcyaWa4Lok7aafPbJpyADTK1qdVCjebBzzwsfvO+Jl1602N9Tx0ltzRjVNDRVAMi1NbU1NULNnZYY15PNZy/pz58zDZNUei1T5r08mxmmCYFQxnENYrXSIkyLlXTy0P2jAw/rQ/NHg+XdXcPRUpwqplzUYWVYDyDX2tTaSEksVjZObdi8cNHh33csdvbdWy5c/viqM1uvW+3+p/Sd/vEzhnE0jKMyTiOIS0/ZOHfW5ffeVqO5e39Hfe6CK9c+dPDHX8r5J73y7edeff5lt7753jRMoIzDCNrBwvHx0q9f3jAcHnt66y2vXbvqxy++Uvf2RS4Obv6mvvmGk6NjU6ug1FrBydFC6mdyKR7bPO3o1u/+7Ht1d9/8yiVtuZRPRrd/viUa8U6AUmsFcmZGmYqUO6lkd374xfziOVIVOauJTlbbhAAlagNaaFOTatOiSbnoz5wWU6UUURutqX3HNIkIkLa3bwRAyllCRKi1GsdJaEqZmZUidxlMUwVQfrp5E/TzXkqdnIHWmogGUspy6WQZISKcrE5A2fv3wUcwn/eRIQPQWgM5Z7pOB6iV9bTO8D/sm0js2knp+gAAAABJRU5ErkJggg==",
  "Finder": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC3ElEQVQ4y32TTWhUVxiG33POvXNnxmgwek0pgcaR6JjUZFHxp0FpB0RaRSTtiCAIQXAlA+7qLhRc6K4bF+1OECHjRlRoQSixgYBpFkWjC6OIE/I/48xc79xz7/n5XJiIEesHZ/NxeM57XngYEQEAyuWywGfG9/3M2NhYq7e3l63tisWiARH97xkZGeFEhK+6uoZ83y8REUZHR8WHdxgRoVQqedLLHerO7XCVlKRXX8hkslR59sR9OnlnZGe+/9qRH469TDvwHEegVqslYdh84ABANrulc/vXg7f37R3IhlFEbiqLJA6RbWvH3cUZ9uvlK+bwoYN/1BqSS6ls24Y2/nBysvFw4v5uZ+0/M8sw7QuM6nVpZqbK6Bs8jaX/pln4ep6+2X+Q3/trgmIZ6e8LBRgC5yJjAeA94NF0lVssszhY4VN/P0Cq8wT+vX8LPx/pZ9UAeDT9nDXqKyw/UEASJ5hfknwdIGiGeF0L4QoXe4/+gih4A2q9Qm//WczNhRg8fBzELJardXhuGqF81xRfA2hjIJMYUsawzMPiYgVdnRvR05OD53lggoNIQCkDZSy0tliXwGgDrS2EsNAqQSIbWHzxFNd+uwomUigcPQ0uHAAOlCZo81ECsgSdxIhaASxS2PrFLmwbuIDxZxvwz/g4Ojp8pDOb0AzqiGOJROn1CRJlIKXEq6nfkU5n0b6tB5v9HDLpNOA5+PPuTUw/noRWCmfOXYJO1EcA2TSxUrZzz7BJ6jNo1l+iUa2wKKxSm63wlZV56ttzgLpzfdBxwqIoMN4aQDuKgXuuJc4ZBNv05bfY0l2A4BxvmgvMXbhuT/x0ngdBwFqtkCwTTKQyjmoq5gCACcPG7MTVy/JFl2eNsuD0ThgCYxAxksrJSxeHJpxUdikOIzfluXx2brZ15tSPwWdlAopi1dYSgOFPyfS+A8aYAIrrHf5umQFAPp+/4bquv6o1AyDK5TKKxaJ5C1ETnk2Vrrm6AAAAAElFTkSuQmCC",
  "Sublime Text 2": "data:image/png;base64,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",
  "Picasa": "data:image/png;base64,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"
}

function timeInterval(d) {
  var txt = '', days = parseInt(d / 86400), hours, minutes, seconds;
  d %= 86400;
  hours = parseInt(d / 3600);
  d %= 3600;
  minutes = parseInt(d / 60);
  seconds = d % 60;
  function fmt(prefix, n, suffix) {
    if (n === 0) {
      return prefix
    }
    return (prefix ? prefix + ' ' : prefix) + parseInt(n) + suffix
  }
  txt = fmt(txt, days, 'd')
  txt = fmt(txt, hours, 'h')
  txt = fmt(txt, minutes, 'm')
  return fmt(txt, seconds, 's')
}

function round6(d, end) {
  var block = (d.getUTCHours() * 10) + (d.getUTCMinutes() / 6);
  if (end == true && block == 0) {
    return 240
  }
  return block
}


d3.csv("/data/activity_log.csv", function(data) {
  var margin = {top: 10, right: 7, bottom: 20, left: 40},
    width = 860 - margin.left - margin.right,
    height = 520 - margin.top - margin.bottom;

  var y = d3.scale.linear()
      .range([height, 0])
      .domain([0, 240])

  var durationY = d3.scale.linear()
      .range([0, height])
      .domain([0, 86400])

  var x = d3.time.scale()
      .range([0, width])
      .domain([new Date(2013, 0, 1), new Date(2013, 11, 31)]).nice()
  var dayFormat = d3.time.format('%y%m%d')


  var durationMap = {};
  data.forEach(function(d){
    d.duration = +d.duration;
    d.start_ts = +d.start_ts;
    d.end_ts = +d.end_ts;

    d.start_ts += 7200;
    d.end_ts += 7200;

    var start_dt = new Date(d.start_ts * 1000);
    var end_dt = new Date(d.end_ts * 1000);

    d.day = dayFormat(start_dt);
    var end = round6(end_dt, true);
    d.height = height - y(end - round6(start_dt));
    d.durationBlock = d.end_ts - d.start_ts; // in seconds
    d.durationHeight = durationY(d.durationBlock);
    durationMap[d.program] = (durationMap[d.program] || 0) + d.duration;
    d.y = y(end);
    d.x = x(d3.time.day(start_dt))

  });

  var nestByProgram = d3.nest()
    .key(function(d) { return d.program; })
    .map(data);

  var programs = d3.keys(nestByProgram)
    .sort(function(a, b){var aa=durationMap[a], bb= durationMap[b]; if (aa < bb) {return 1;} return -1})

  d3.select("#computer_activity_programs")
    .selectAll("a")
    .data(programs)
    .enter().append("a")
    .attr("class", function(d, i){return "activity_btn" + (i == 0 ? ' active' : '')})
    .on("click", function(d, i) {
      d3.select("#computer_activity_programs").selectAll("a").classed("active", function(dd, ii){
        return i == ii;
      })
      update(nestByProgram[d]);
    })
    .append("img")
    .attr("width", 16)
    .attr("height", 16)
    .attr("src", function(d) {return icons[d]})
    .attr("alt", function(d) {return d;})
    .attr("title", function(d) {return d + " - " + timeInterval(durationMap[d]);})

  var svg = d3.select("#activity").append("svg")
      .attr("width", 860)
      .attr("height", 530)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom")
      .tickFormat(d3.time.format("%b"))

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)

  svg.selectAll(".x.axis text")
      .style("text-anchor", "middle")
      .attr("x", 36)
      .attr("y", 7)

  var bands = svg.append("g")
    .attr("class", "bands")

    bands.selectAll(".band")
      .data(d3.range(24))
        .enter().append("rect")
        .attr("class", function(d, i){return i % 2 == 0 ? "band band_even" : "band band_odd";})
        .attr("x", 0 - margin.left)
        .attr("width", width + margin.left)
        .attr("y", function(d){return y(d * 10) - (height / 24);})
        .attr("height", height/24);

    var number_format = d3.format('d');

    function hrTickFormatter(hr){
      if (hr == 24 || hr == 0 ) {
        return "12a"
      }
      if (hr < 12 ) {
        return hr + "a"
      }
      if (hr === 12) {
        return hr + "p"
      }
      return (hr % 12) + "p"
    }

    function updateAxis() {
      var b = bands.selectAll("text")
        .data(d3.range(24).reverse());
        b.transition()
        .text(function(d){
          return hrTickFormatter(d);
        })

        b.enter().append("text")
        .attr("x", -12)
        .attr("y", function(d){return y((23-d) * 10) - ((height / 24) / 2)})
        .attr("dy", ".5em")
        .style("text-anchor", "end")
        .transition()
        .text(function(d){
          return hrTickFormatter(d);
        })
        b.exit()
        .remove()
    }
    updateAxis();


    var datasvg = svg.append("g")
    var rect = datasvg.selectAll("rect")

    var lastData;
    function update(datum) {
      lastData = datum;
      rect = datasvg.selectAll("rect");
      var durationOffset = {}
      var a = rect.data(datum);

      function yCalc(d) {
          return height - (d.y+d.durationHeight);
      }

      // update
      a
      .transition()
        .delay(10)
        .duration(900)
        .attr("x", function(d) { return d.x; })
      .transition()
        .delay(900)
        .duration(900)
        .attr("y", yCalc)
        .attr("height", function(d){ return d.height })

      a.enter().append("rect")
        .attr("class", function(d, i){ return "activity"; })
        .attr("width", 2)
        .style("fill", "#2CA02C")
        .attr("x", function(d) { return d.x; })
      .transition()
        .delay(900)
        .duration(900)
        .attr("y", yCalc)
        .attr("height", function(d){ return d.height })

      a.exit()
        .transition()
          .delay(10)
          .duration(900)
          .attr("x",function(d) { return width + d.x})
          .attr("height", 0)
        .remove();
    }
    update(nestByProgram["All Programs"]);
});