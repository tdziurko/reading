function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current (first two weeks are approximation, rest is ok)'],
    ['07/11',    383,   383],
    ['08/11',    373,  383-10],
    ['09/11',    363,  383-20],
    ['10/11',    353,  383-30],
    ['11/11',    343,  383-40],
    ['12/11',    333,  383-50],
    ['13/11',    323,  383-60],
    ['14/11',    313,  383-70],
    ['15/11',    303,  383-80],
    ['16/11',    293,  383-90],
    ['17/11',    283,  383-100],
    ['18/11',    273,  383-110],
    ['19/11',    263,  383-120],
    ['20/11',    253,  383-130],
    ['21/11',    243,  383-140],
    ['22/11',    233,  383-150],
    ['23/11',    223,  383-160],
    ['24/11',    213,  383-170],
    ['25/11',    203,  383-180],
    ['26/11',    193,  383-190],
    ['27/11',    183,  383-218],
    ['28/11',    173,  383-232],
    ['29/11',    163,  383-252],
    ['30/11',    153,  383-252],
    ['01/12',    143,  383-298],
    ['02/12',    133,  383-298],
    ['03/12',    123,  383-298],
    ['04/12',    113,  383-298],
    ['05/12',    103,  383-298],
    ['06/12',     93,  383-327],
    ['07/12',     83,  null],
    ['08/12',     73,  null],
    ['09/12',     63,  null],
    ['10/12',     53,  null],
    ['11/12',     43,  null],
    ['12/12',     33,  null],
    ['13/12',     23,  null],
    ['14/12',     13,  null],
    ['15/12',      3,  null],
    ['16/12',      0,  null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('java8_in_action')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
