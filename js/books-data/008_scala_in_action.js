function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['22/01',    379,   379],
    ['23/01',    369,  null],
    ['24/01',    359,  null],
    ['25/01',    349,  null],
    ['26/01',    339,  null],
    ['27/01',    329,  null],
    ['28/01',    319,  null],
    ['29/01',    309,  null],
    ['30/01',    299,  null],
    ['31/01',    289,  null],
    ['01/02',    279,  null],
    ['02/02',    269,  null],
    ['03/02',    259,  null],
    ['04/02',    249,  null],
    ['05/02',    239,  null],
    ['06/02',    229,  null],
    ['07/02',    219,  null],
    ['08/02',    209,  null],
    ['09/02',    199,  null],
    ['10/02',    189,  null],
    ['11/02',    179,  null],
    ['12/02',    169,  null],
    ['13/02',    159,  null],
    ['14/02',    149,  null],
    ['15/02',    139,  null],
    ['16/02',    129,  null],
    ['17/02',    119,  null],
    ['18/02',    109,  null],
    ['19/02',     99,  null],
    ['20/02',     89,  null],
    ['21/02',     79,  null],
    ['22/02',     69,  null],
    ['23/02',     59,  null],
    ['24/02',     49,  null],
    ['25/02',     39,  null],
    ['26/02',     29,  null],
    ['27/02',     19,  null],
    ['28/02',      9,  null],
    ['01/03',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('scala_in_action')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
