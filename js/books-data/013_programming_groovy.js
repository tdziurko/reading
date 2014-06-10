function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['03/06',    308,   308],
    ['04/06',    298,  308 - 22],
    ['05/06',    288,  308 - 30],
    ['06/06',    278,  308 - 30],
    ['07/06',    268,  308 - 30],
    ['08/06',    258,  308 - 30],
    ['09/06',    248,  308 - 39],
    ['10/06',    238,  null],
    ['11/06',    228,  null],
    ['12/06',    218,  null],
    ['13/06',    208,  null],
    ['14/06',    198,  null],
    ['15/06',    188,  null],
    ['16/06',    178,  null],
    ['17/06',    168,  null],
    ['18/06',    158,  null],
    ['19/06',    148,  null],
    ['20/06',    138,  null],
    ['21/06',    128,  null],
    ['22/06',    118,  null],
    ['23/06',    108,  null],
    ['24/06',     98,  null],
    ['25/06',     88,  null],
    ['26/06',     78,  null],
    ['27/06',     68,  null],
    ['28/06',     58,  null],
    ['29/06',     48,  null],
    ['30/06',     38,  null],
    ['01/07',     28,  null],
    ['02/07',     18,  null],
    ['03/07',      8,  null],
    ['04/07',      0,  null]

  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('programming_groovy')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
