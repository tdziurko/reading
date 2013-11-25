function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['24/11',    153,    153],
    ['25/11',    143,   null],
    ['26/11',    133,   null],
    ['27/11',    123,   null],
    ['28/11',    113,   null],
    ['29/11',    103,   null],
    ['30/11',     93,   null],
    ['01/12',     83,   null],
    ['02/12',     73,   null],
    ['03/12',     63,   null],
    ['04/12',     53,   null],
    ['05/12',     43,   null],
    ['06/12',     33,   null],
    ['07/12',     23,   null],
    ['08/12',     13,   null],
    ['09/12',      3,   null],
    ['09/12',      0,   null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('nosql_distilled')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
