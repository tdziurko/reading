function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
      ['08/08',    523,   523],
      ['09/08',    513,  523 - 121],
      ['10/08',    503,  523 - 121],
      ['11/08',    493,  523 - 158],
      ['12/08',    483,  523 - 247],
      ['13/08',    473,  523 - 305],
      ['14/08',    463,  523 - 470],
      ['15/08',    453,  523 - 523],
      ['16/08',    443,  null],
      ['17/08',    433,  null],
      ['18/08',    423,  null],
      ['19/08',    413,  null],
      ['20/08',    403,  null],
      ['21/08',    393,  null],
      ['22/08',    383,  null],
      ['23/08',    373,  null],
      ['24/08',    363,  null],
      ['25/08',    353,  null],
      ['26/08',    343,  null],
      ['27/08',    333,  null],
      ['28/08',    323,  null],
      ['29/08',    313,  null],
      ['30/08',    303,  null],
      ['31/08',    293,  null],
      ['01/09',    283,  null],
      ['02/09',    273,  null],
      ['03/09',    263,  null],
      ['04/09',    253,  null],
      ['05/09',    243,  null],
      ['06/09',    233,  null],
      ['07/09',    223,  null],
      ['08/09',    213,  null],
      ['09/09',    203,  null],
      ['10/09',    193,  null],
      ['11/09',    183,  null],
      ['12/09',    173,  null],
      ['13/09',    163,  null],
      ['14/09',    153,  null],
      ['15/09',    143,  null],
      ['16/09',    133,  null],
      ['17/09',    123,  null],
      ['18/09',    113,  null],
      ['19/09',    103,  null],
      ['20/09',     93,  null],
      ['21/09',     83,  null],
      ['22/09',     73,  null],
      ['23/09',     63,  null],
      ['24/09',     53,  null],
      ['25/09',     43,  null],
      ['26/09',     33,  null],
      ['27/09',     23,  null],
      ['28/09',     13,  null],
      ['29/09',      3,  null],
      ['30/09',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('cqrs_journey')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
