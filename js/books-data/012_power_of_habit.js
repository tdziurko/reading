function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['12/05',    410,   410],
    ['13/05',    400,  410 - 82],
    ['14/05',    390,  410 - 82],
    ['15/05',    380,  410 - 82],
    ['16/05',    370,  410 - 123],
    ['17/05',    360,  410 - 123],
    ['18/05',    350,  410 - 123],
    ['19/05',    340,  410 - 123],
    ['20/05',    330,  410 - 123],
    ['21/05',    320,  410 - 123],
    ['22/05',    310,  410 - 123],
    ['23/05',    300,  410 - 123],
    ['24/05',    290,  410 - 123],
    ['25/05',    280,  410 - 138],
    ['26/05',    270,  410 - 138],
    ['27/05',    260,  410 - 160],
    ['28/05',    250,  410 - 184],
    ['29/05',    240,  410 - 213],
    ['30/05',    230,  410 - 241],
    ['31/05',    220,  410 - 296],
    ['01/06',    210,  410 - 336],
    ['02/06',    200,  null],
    ['03/06',    190,  null],
    ['04/06',    180,  null],
    ['05/06',    170,  null],
    ['06/06',    160,  null],
    ['07/06',    150,  null],
    ['08/06',    140,  null],
    ['09/06',    130,  null],
    ['10/06',    120,  null],
    ['12/06',    110,  null],
    ['12/06',    100,  null],
    ['13/06',     90,  null],
    ['14/06',     80,  null],
    ['15/06',     70,  null],
    ['16/06',     60,  null],
    ['17/06',     50,  null],
    ['18/06',     40,  null],
    ['19/06',     30,  null],
    ['20/06',     20,  null],
    ['21/06',     10,  null],
    ['22/06',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('power_of_habit')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
