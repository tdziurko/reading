function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
      ['24/07',    321,   321],
      ['25/07',    311,  null],
      ['26/07',    301,  null],
      ['27/07',    291,  null],
      ['28/07',    281,  null],
      ['29/07',    271,  null],
      ['30/07',    261,  null],
      ['31/07',    251,  null],
      ['01/08',    241,  null],
      ['02/08',    231,  null],
      ['03/08',    221,  null],
      ['04/08',    211,  null],
      ['05/08',    201,  null],
      ['06/08',    191,  null],
      ['07/08',    181,  null],
      ['08/08',    171,  null],
      ['09/08',    161,  null],
      ['10/08',    151,  null],
      ['11/08',    141,  null],
      ['12/08',    131,  null],
      ['13/08',    121,  null],
      ['14/08',    111,  null],
      ['15/08',    101,  null],
      ['16/08',     91,  null],
      ['17/08',     81,  null],
      ['18/08',     71,  null],
      ['19/08',     61,  null],
      ['20/08',     51,  null],
      ['21/08',     41,  null],
      ['22/08',     31,  null],
      ['23/08',     21,  null],
      ['24/08',     11,  null],
      ['25/08',      1,  null],
      ['26/08',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('cqrs_journey')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
