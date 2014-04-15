function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['04/04',    200,   200],
    ['05/04',    190,  null],
    ['06/04',    180,  null],
    ['07/04',    170,  null],
    ['08/04',    160,  null],
    ['09/04',    150,  null],
    ['10/04',    140,  null],
    ['11/04',    130,  null],
    ['12/04',    120,  null],
    ['13/04',    110,  null],
    ['14/04',    100,  null],
    ['15/04',     90,  null],
    ['16/04',     80,  null],
    ['17/04',     70,  null],
    ['18/04',     60,  null],
    ['19/04',     50,  null],
    ['20/04',     40,  null],
    ['21/04',     30,  null],
    ['22/04',     20,  null],
    ['23/04',     10,  null],
    ['24/04',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('agile_hiring')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
