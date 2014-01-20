function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['25/12',    449,    449],
    ['26/12',    439,   449 - 15],
    ['27/12',    429,   449 - 24],
    ['28/12',    419,   449 - 34],
    ['29/12',    409,   449 - 67],
    ['30/12',    399,   449 - 85],
    ['31/12',    389,   449 - 96],
    ['01/01',    379,   449 - 111],
    ['02/01',    369,   449 - 132],
    ['03/01',    359,   449 - 132],
    ['04/01',    349,   449 - 166],
    ['05/01',    339,   449 - 166],
    ['06/01',    329,   449 - 191],
    ['07/01',    319,   449 - 191],
    ['08/01',    309,   449 - 207],
    ['09/01',    299,   449 - 215],
    ['10/01',    289,   449 - 215],
    ['11/01',    279,   449 - 231],
    ['12/01',    269,   449 - 256],
    ['13/01',    259,   449 - 265],
    ['14/01',    249,   449 - 284],
    ['15/01',    239,   449 - 326],
    ['16/01',    229,   449 - 326],
    ['17/01',    219,   449 - 358],
    ['18/01',    209,   449 - 358],
    ['19/01',    199,   449 - 358],
    ['20/01',    189,   null],
    ['21/01',    179,   null],
    ['22/01',    169,   null],
    ['23/01',    159,   null],
    ['24/01',    149,   null],
    ['25/01',    139,   null],
    ['26/01',    129,   null],
    ['27/01',    119,   null],
    ['28/01',    109,   null],
    ['29/01',     99,   null],
    ['30/01',     89,   null],
    ['31/01',     79,   null],
    ['01/02',     69,   null],
    ['02/02',     59,   null],
    ['03/02',     49,   null],
    ['04/02',     39,   null],
    ['05/02',     29,   null],
    ['06/02',     19,   null],
    ['07/02',      9,   null],
    ['07/02',      0,   null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('well_grounded_java')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
