function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['03/06',    324,  324],
    ['04/06',    314,  324 - 22],
    ['05/06',    304,  324 - 30],
    ['06/06',    294,  324 - 30],
    ['07/06',    284,  324 - 30],
    ['08/06',    274,  324 - 30],
    ['09/06',    264,  324 - 39],
    ['10/06',    254,  324 - 53],
    ['11/06',    244,  324 - 64],
    ['12/06',    234,  324 - 87],
    ['13/06',    224,  324 - 94],
    ['14/06',    214,  324 - 108],
    ['15/06',    204,  324 - 110],
    ['16/06',    194,  324 - 126],
    ['17/06',    184,  324 - 141],
    ['18/06',    174,  324 - 141],
    ['19/06',    164,  324 - 145],
    ['20/06',    154,  324 - 162],
    ['21/06',    144,  324 - 185],
    ['22/06',    134,  324 - 185],
    ['23/06',    124,  324 - 185],
    ['24/06',    114,  324 - 185],
    ['25/06',    104,  324 - 185],
    ['26/06',     94,  324 - 204],
    ['27/06',     84,  324 - 204],
    ['28/06',     74,  324 - 204],
    ['29/06',     64,  324 - 204],
    ['30/06',     54,  324 - 204],
    ['01/07',     44,  324 - 204],
    ['02/07',     34,  324 - 239],
    ['03/07',     24,  null],
    ['04/07',     14,  null],
    ['05/07',      4,  null],
    ['06/07',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('programming_groovy')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
