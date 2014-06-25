function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['17/06',    129,   129],
    ['18/06',    119,  129 - 30],
    ['19/06',    109,  129 - 30],
    ['20/06',     99,  129 - 62],
    ['21/06',     89,  129 - 62],
    ['22/06',     79,  129 - 62],
    ['23/06',     69,  129 - 82],
    ['24/06',     59,  129 - 86],
    ['25/06',     49,  129 - 104],
    ['26/06',     39,  null],
    ['27/06',     29,  null],
    ['28/06',     19,  null],
    ['29/06',      9,  null],
    ['30/06',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('apprenticeship_patterns')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
