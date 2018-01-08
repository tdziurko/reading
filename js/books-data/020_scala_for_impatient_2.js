function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
      ['01/01',    336,   336],
      ['02/01',    326,  336 - 22],
      ['03/01',    316,  336 - 36],
      ['04/01',    306,  336 - 40],
      ['05/01',    296,  336 - 55],
      ['06/01',    286,  336 - 55],
      ['07/01',    276,  336 - 63],
      ['08/01',    266,  null],
      ['09/01',    256,  null],
      ['10/01',    246,  null],
      ['11/01',    236,  null],
      ['12/01',    226,  null],
      ['13/01',    216,  null],
      ['14/01',    206,  null],
      ['15/01',    196,  null],
      ['16/01',    186,  null],
      ['17/01',    176,  null],
      ['18/01',    166,  null],
      ['19/01',    156,  null],
      ['20/01',    146,  null],
      ['21/01',    136,  null],
      ['22/01',    126,  null],
      ['23/01',    116,  null],
      ['24/01',    106,  null],
      ['25/01',     96,  null],
      ['26/01',     86,  null],
      ['27/01',     76,  null],
      ['28/01',     66,  null],
      ['29/01',     56,  null],
      ['30/01',     46,  null],
      ['31/01',     36,  null],
      ['01/02',     26,  null],
      ['02/02',     16,  null],
      ['03/02',      6,  null],
      ['04/02',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('scala_for_impatient_2')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
