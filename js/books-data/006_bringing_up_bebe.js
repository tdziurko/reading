function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['25/12',    378,    378],
    ['26/12',    368,   378 - 30],
    ['27/12',    358,   378 - 76],
    ['28/12',    348,   378 - 76],
    ['29/12',    338,   378 - 104],
    ['30/12',    328,   378 - 160],
    ['31/12',    318,   378 - 226],
    ['01/01',    308,   378 - 302],
    ['02/01',    298,   378 - 342],
    ['03/01',    288,   378 - 344],
    ['04/01',    278,   378 - 378],
    ['05/01',    268,   null],
    ['06/01',    258,   null],
    ['07/01',    248,   null],
    ['08/01',    238,   null],
    ['09/01',    228,   null],
    ['10/01',    218,   null],
    ['11/01',    208,   null],
    ['12/01',    198,   null],
    ['13/01',    188,   null],
    ['14/01',    178,   null],
    ['15/01',    168,   null],
    ['16/01',    158,   null],
    ['17/01',    148,   null],
    ['18/01',    138,   null],
    ['19/01',    128,   null],
    ['20/01',    118,   null],
    ['21/01',    108,   null],
    ['22/01',     98,   null],
    ['23/01',     88,   null],
    ['24/01',     78,   null],
    ['25/01',     68,   null],
    ['26/01',     58,   null],
    ['27/01',     48,   null],
    ['28/01',     38,   null],
    ['29/01',     28,   null],
    ['30/01',     18,   null],
    ['31/01',      8,   null],
    ['31/01',      0,   null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('bringing_up_bebe')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
