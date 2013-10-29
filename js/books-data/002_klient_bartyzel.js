function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['19/10',    230,   230],
    ['20/10',    220,   122],
    ['21/10',    210,    88],
    ['22/10',    200,    88],
    ['23/10',    190,    66],
    ['24/10',    180,    42],
    ['25/10',    170,    42],
    ['26/10',    160,    42],
    ['27/10',    150,    21],
    ['28/10',    140,     2],
    ['29/10',    130,     0],
    ['30/10',    120,   null],
    ['31/10',    110,   null],
    ['01/11',    100,   null],
    ['02/11',     90,   null],
    ['03/11',     80,   null],
    ['04/11',     70,   null],
    ['05/11',     60,   null],
    ['06/11',     50,   null],
    ['07/11',     40,   null],
    ['08/11',     30,   null],
    ['09/11',     20,   null],
    ['10/11',     10,   null],
    ['10/11',      0,   null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('klient_bartyzel')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 330}}
  );
}


google.setOnLoadCallback(drawVisualization);
