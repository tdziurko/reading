function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['22/01',    379,   379],
    ['23/01',    369,  379 - 16],
    ['24/01',    359,  379 - 16],
    ['25/01',    349,  379 - 19],
    ['26/01',    339,  379 - 49],
    ['27/01',    329,  379 - 51],
    ['28/01',    319,  379 - 51],
    ['29/01',    309,  379 - 69],
    ['30/01',    299,  379 - 69],
    ['31/01',    289,  379 - 69],
    ['01/02',    279,  379 - 69],
    ['02/02',    269,  379 - 93],
    ['03/02',    259,  379 - 93],
    ['04/02',    249,  379 - 93],
    ['05/02',    239,  379 - 93],
    ['06/02',    229,  379 - 93],
    ['07/02',    219,  379 - 93],
    ['08/02',    209,  379 - 93],
    ['09/02',    199,  379 - 99],
    ['10/02',    189,  379 - 99],
    ['11/02',    179,  379 - 99],
    ['12/02',    169,  379 - 99],
    ['13/02',    159,  379 - 99],
    ['14/02',    149,  379 - 99],
    ['15/02',    139,  379 - 99],
    ['16/02',    129,  379 - 99],
    ['17/02',    119,  379 - 99],
    ['18/02',    109,  379 - 99],
    ['19/02',     99,  379 - 99],
    ['20/02',     89,  379 - 119],
    ['21/02',     79,  379 - 119],
    ['22/02',     69,  379 - 119],
    ['23/02',     59,  379 - 119],
    ['24/02',     49,  379 - 119],
    ['25/02',     39,  379 - 119],
    ['26/02',     29,  379 - 127],
    ['27/02',     19,  379 - 127],
    ['28/02',      9,  379 - 131],
    ['01/03',      0,  379 - 139],
    ['02/03',      0,  379 - 152],
    ['03/03',      0,  379 - 152],
    ['04/03',      0,  379 - 152],
    ['05/03',      0,  379 - 170],
    ['06/03',      0,  379 - 170],
    ['07/03',      0,  379 - 174],
    ['08/03',      0,  379 - 174],
    ['09/03',      0,  379 - 174],
    ['10/03',      0,  379 - 174],
    ['11/03',      0,  379 - 174],
    ['12/03',      0,  379 - 196],
    ['13/03',      0,  379 - 196],
    ['14/03',      0,  379 - 212],
    ['15/03',      0,  379 - 235],
    ['16/03',      0,  null],
    ['17/03',      0,  null],
    ['18/03',      0,  null],
    ['19/03',      0,  null],
    ['20/03',      0,  null],

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('scala_in_action')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
