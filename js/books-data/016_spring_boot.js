function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
      ['17/07',    170,   170],
      ['18/07',    160,  170 - 32],
      ['19/07',    150,  170 - 32],
      ['20/07',    140,  170 - 112],
      ['21/07',    130,  170 - 125],
      ['22/07',    120,  170 - 170],
      ['23/07',    110,  null],
      ['24/07',    100,  null],
      ['25/07',     90,  null],
      ['26/07',     80,  null],
      ['27/07',     70,  null],
      ['28/07',     60,  null],
      ['29/07',     50,  null],
      ['30/07',     40,  null],
      ['31/07',     30,  null],
      ['01/08',     20,  null],
      ['02/08',     10,  null],
      ['03/08',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('spring_boot')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
