function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['12/04',    410,   410],
    ['13/04',    400,  410 - 82],
    ['14/04',    390,  410 - 82],
    ['15/04',    380,  410 - 82],
    ['16/04',    370,  410 - 123],
    ['17/04',    360,  null],
    ['18/04',    350,  null],
    ['19/04',    340,  null],
    ['20/04',    330,  null],
    ['21/04',    320,  null],
    ['22/04',    310,  null],
    ['23/04',    300,  null],
    ['24/04',    290,  null],
    ['25/04',    280,  null],
    ['26/04',    270,  null],
    ['27/04',    260,  null],
    ['28/04',    250,  null],
    ['29/04',    240,  null],
    ['30/04',    230,  null],
    ['01/05',    220,  null],
    ['02/05',    210,  null],
    ['03/05',    200,  null],
    ['04/05',    190,  null],
    ['05/05',    180,  null],
    ['06/05',    170,  null],
    ['07/05',    160,  null],
    ['08/05',    150,  null],
    ['09/05',    140,  null],
    ['10/05',    130,  null],
    ['11/05',    120,  null],
    ['12/05',    110,  null],
    ['13/05',    100,  null],
    ['14/05',     90,  null],
    ['15/05',     80,  null],
    ['16/05',     70,  null],
    ['17/05',     60,  null],
    ['18/05',     50,  null],
    ['19/05',     40,  null],
    ['20/05',     30,  null],
    ['21/05',     20,  null],
    ['22/05',     10,  null],
    ['23/05',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('power_of_habit')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
