function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['19/04',    337,   337],
    ['20/04',    327,  337 - 6],
    ['21/04',    317,  337 - 6],
    ['22/04',    307,  337 - 42],
    ['23/04',    297,  337 - 54],
    ['24/04',    287,  337 - 91],
    ['25/04',    277,  337 - 91],
    ['26/04',    267,  337 - 95],
    ['27/04',    257,  337 - 95],
    ['28/04',    247,  337 - 116],
    ['29/04',    237,  337 - 116],
    ['30/04',    227,  337 - 116],
    ['01/05',    217,  337 - 116],
    ['02/05',    207,  337 - 116],
    ['03/05',    197,  337 - 121],
    ['04/05',    187,  337 - 138],
    ['05/05',    177,  337 - 143],
    ['06/05',    167,  337 - 143],
    ['07/05',    157,  337 - 143],
    ['08/05',    147,  337 - 149],
    ['09/05',    137,  337 - 191],
    ['10/05',    127,  337 - 191],
    ['11/05',    117,  337 - 191],
    ['12/05',    107,  337 - 191],
    ['13/05',     97,  337 - 201],
    ['14/05',     87,  337 - 201],
    ['15/05',     77,  337 - 201],
    ['16/05',     67,  337 - 235],
    ['17/05',     57,  337 - 272],
    ['18/05',     47,  337 - 337],
    ['19/05',     37,  null],
    ['20/05',     27,  null],
    ['21/05',     17,  null],
    ['22/05',      7,  null],
    ['23/05',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('scala_for_impatient')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
