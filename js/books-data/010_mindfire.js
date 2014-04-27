function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['21/04',    175,   175],
    ['22/04',    165,  175 - 47],
    ['23/04',    155,  175 - 77],
    ['24/04',    145,  175 - 103],
    ['25/04',    135,  175 - 103],
    ['26/04',    125,  175 - 175],
    ['27/04',    115,  null],
    ['28/04',    105,  null],
    ['29/04',     95,  null],
    ['30/04',     85,  null],
    ['01/05',     75,  null],
    ['02/05',     65,  null],
    ['03/05',     55,  null],
    ['04/05',     45,  null],
    ['05/05',     35,  null],
    ['06/05',     25,  null],
    ['07/05',     15,  null],
    ['08/05',      5,  null],
    ['09/05',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('mindfire')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
