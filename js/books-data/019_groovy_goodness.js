function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
      ['08/09',    291,   291],
      ['09/09',    281,  291 - 32],
      ['10/09',    271,  291 - 37],
      ['11/09',    261,  291 - 57],
      ['12/09',    251,  291 - 60],
      ['13/09',    241,  291 - 60],
      ['14/09',    231,  291 - 60],
      ['15/09',    221,  291 - 81],
      ['16/09',    211,  291 - 99],
      ['17/09',    201,  null],
      ['18/09',    191,  null],
      ['19/09',    181,  null],
      ['20/09',    171,  null],
      ['21/09',    161,  null],
      ['22/09',    151,  null],
      ['23/09',    141,  null],
      ['24/09',    131,  null],
      ['25/09',    121,  null],
      ['26/09',    111,  null],
      ['27/09',    101,  null],
      ['28/09',     91,  null],
      ['29/09',     81,  null],
      ['30/09',     71,  null],
      ['01/10',     61,  null],
      ['02/10',     51,  null],
      ['03/10',     41,  null],
      ['04/10',     31,  null],
      ['05/10',     21,  null],
      ['06/10',     11,  null],
      ['07/10',      1,  null],
      ['08/10',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('groovy_goodness')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
