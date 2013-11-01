function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['30/10',    335,    318],
    ['31/10',    325,    318],
    ['01/11',    315,   null],
    ['02/11',    305,   null],
    ['03/11',    295,   null],
    ['04/11',    285,   null],
    ['05/11',    275,   null],
    ['06/11',    265,   null],
    ['07/11',    255,   null],
    ['08/11',    245,   null],
    ['09/11',    235,   null],
    ['10/11',    225,   null],
    ['11/11',    215,   null],
    ['12/11',    205,   null],
    ['13/11',    195,   null],
    ['14/11',    185,   null],
    ['15/11',    175,   null],
    ['16/11',    165,   null],
    ['17/11',    155,   null],
    ['18/11',    145,   null],
    ['19/11',    135,   null],
    ['20/11',    125,   null],
    ['21/11',    115,   null],
    ['22/11',    105,   null],
    ['23/11',     95,   null],
    ['24/11',     85,   null],
    ['25/11',     75,   null],
    ['26/11',     65,   null],
    ['27/11',     55,   null],
    ['28/11',     45,   null],
    ['29/11',     35,   null],
    ['30/11',     25,   null],
    ['01/12',     15,   null],
    ['02/12',      5,   null],
    ['02/12',      0,   null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('mastering_angularjs')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 330}}
  );
}


google.setOnLoadCallback(drawVisualization);
