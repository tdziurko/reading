function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['04/04',    200,   200],
    ['05/04',    190,  200-12],
    ['06/04',    180,  200-24],
    ['07/04',    170,  200-36],
    ['08/04',    160,  200-48],
    ['09/04',    150,  200-60],
    ['10/04',    140,  200-72],
    ['11/04',    130,  200-84],
    ['12/04',    120,  200-96],
    ['13/04',    110,  200-108],
    ['14/04',    100,  200-120],
    ['15/04',     90,  200-144],
    ['16/04',     80,  200-144],
    ['17/04',     70,  200-144],
    ['18/04',     60,  200-190],
    ['19/04',     50,  200-200],
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
