function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
      ['17/07',    180,   180],
      ['18/07',    170,  180 - 25],
      ['19/07',    160,  180 - 25],
      ['20/07',    150,  180 - 74],
      ['21/07',    140,  180 - 180],
      ['22/07',    130,  null],
      ['23/07',    120,  null],
      ['24/07',    110,  null],
      ['25/07',    100,  null],
      ['26/07',     90,  null],
      ['27/07',     80,  null],
      ['28/07',     70,  null],
      ['29/07',     60,  null],
      ['30/07',     50,  null],
      ['31/07',     40,  null],
      ['01/08',     30,  null],
      ['02/08',     20,  null],
      ['03/08',     10,  null],
      ['04/08',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('brave_new_world')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
