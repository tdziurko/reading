function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['02/01',    473,   473],
    ['03/01',    463,  473 - 46],
    ['04/01',    453,  473 - 46],
    ['05/01',    443,  473 - 58],
    ['06/01',    433,  473 - 86],
    ['07/01',    423,  null],
    ['08/01',    413,  null],
    ['09/01',    403,  null],
    ['10/01',    393,  null],
    ['11/01',    383,  null],
    ['12/01',    373,  null],
    ['13/01',    363,  null],
    ['14/01',    353,  null],
    ['15/01',    343,  null],
    ['16/01',    333,  null],
    ['17/01',    323,  null],
    ['18/01',    313,  null],
    ['19/01',    303,  null],
    ['20/01',    293,  null],
    ['21/01',    283,  null],
    ['22/01',    273,  null],
    ['23/01',    263,  null],
    ['24/01',    253,  null],
    ['25/01',    243,  null],
    ['26/01',    233,  null],
    ['27/01',    223,  null],
    ['28/01',    213,  null],
    ['29/01',    203,  null],
    ['30/01',    193,  null],
    ['31/01',    183,  null],
    ['01/02',    173,  null],
    ['02/02',    163,  null],
    ['03/02',    153,  null],
    ['04/02',    143,  null],
    ['05/02',    133,  null],
    ['06/02',    123,  null],
    ['07/02',    113,  null],
    ['08/02',    103,  null],
    ['09/02',     93,  null],
    ['10/02',     83,  null],
    ['11/02',     73,  null],
    ['12/02',     63,  null],
    ['13/02',     53,  null],
    ['14/02',     43,  null],
    ['15/02',     33,  null],
    ['16/02',     23,  null],
    ['17/02',     13,  null],
    ['18/02',      3,  null],
    ['19/02',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('soft_skills')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
