function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['29/10',    335,    335],
    ['30/10',    325,    318],
    ['31/10',    315,    318],
    ['01/11',    305,    318],
    ['02/11',    295,    267],
    ['03/11',    285,   335 -  96],
    ['04/11',    275,   335 - 100],
    ['05/11',    265,   335 - 118],
    ['06/11',    255,   335 - 118],
    ['07/11',    245,   335 - 118],
    ['08/11',    235,   335 - 118],
    ['09/11',    225,   335 - 118],
    ['10/11',    215,   335 - 142],
    ['11/11',    205,   335 - 158],
    ['12/11',    195,   335 - 165],
    ['13/11',    185,   null],
    ['14/11',    175,   null],
    ['15/11',    165,   null],
    ['16/11',    155,   null],
    ['17/11',    145,   null],
    ['18/11',    135,   null],
    ['19/11',    125,   null],
    ['20/11',    115,   null],
    ['21/11',    105,   null],
    ['22/11',     95,   null],
    ['23/11',     85,   null],
    ['24/11',     75,   null],
    ['25/11',     65,   null],
    ['26/11',     55,   null],
    ['27/11',     45,   null],
    ['28/11',     35,   null],
    ['29/11',     25,   null],
    ['30/11',     15,   null],
    ['01/12',      5,   null],
    ['01/12',      0,   null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('mastering_angularjs')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 330}}
  );
}


google.setOnLoadCallback(drawVisualization);
