function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['14/06',    381,   381],
    ['15/06',    371,  381 - 124],
    ['16/06',    361,  381 - 324],
    ['17/06',    351,  null],
    ['18/06',    341,  null],
    ['19/06',    331,  null],
    ['20/06',    321,  null],
    ['21/06',    311,  null],
    ['22/06',    301,  null],
    ['23/06',    291,  null],
    ['24/06',    281,  null],
    ['25/06',    271,  null],
    ['26/06',    261,  null],
    ['27/06',    251,  null],
    ['28/06',    241,  null],
    ['29/06',    231,  null],
    ['30/06',    221,  null],
    ['01/07',    211,  null],
    ['02/07',    201,  null],
    ['03/07',    191,  null],
    ['04/07',    181,  null],
    ['05/07',    171,  null],
    ['06/07',    161,  null],
    ['07/07',    151,  null],
    ['08/07',    141,  null],
    ['09/07',    131,  null],
    ['10/07',    121,  null],
    ['11/07',    111,  null],
    ['12/07',    101,  null],
    ['13/07',     91,  null],
    ['14/07',     81,  null],
    ['15/07',     71,  null],
    ['16/07',     61,  null],
    ['17/07',     51,  null],
    ['18/07',     41,  null],
    ['19/07',     31,  null],
    ['20/07',     21,  null],
    ['21/07',     11,  null],
    ['22/07',      1,  null],
    ['23/07',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('i_am_zlatan')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
