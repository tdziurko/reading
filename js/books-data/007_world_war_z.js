function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['04/01',    538,    538],
    ['05/01',    528,   538 - 314],
    ['06/01',    518,   538 - 372],
    ['07/01',    508,   null],
    ['08/01',    498,   null],
    ['09/01',    488,   null],
    ['10/01',    478,   null],
    ['11/01',    468,   null],
    ['12/01',    458,   null],
    ['13/01',    448,   null],
    ['14/01',    438,   null],
    ['15/01',    428,   null],
    ['16/01',    418,   null],
    ['17/01',    408,   null],
    ['18/01',    398,   null],
    ['19/01',    388,   null],
    ['20/01',    378,   null],
    ['21/01',    368,   null],
    ['22/01',    358,   null],
    ['23/01',    348,   null],
    ['24/01',    338,   null],
    ['25/01',    328,   null],
    ['26/01',    318,   null],
    ['27/01',    308,   null],
    ['28/01',    298,   null],
    ['29/01',    288,   null],
    ['30/01',    278,   null],
    ['31/01',    268,   null],
    ['01/02',    258,   null],
    ['02/02',    248,   null],
    ['03/02',    238,   null],
    ['04/02',    228,   null],
    ['05/02',    218,   null],
    ['06/02',    208,   null],
    ['07/02',    198,   null],
    ['08/02',    188,   null],
    ['09/02',    178,   null],
    ['10/02',    168,   null],
    ['11/02',    158,   null],
    ['12/02',    148,   null],
    ['13/02',    138,   null],
    ['14/02',    128,   null],
    ['15/02',    118,   null],
    ['16/02',    108,   null],
    ['17/02',     98,   null],
    ['18/02',     88,   null],
    ['19/02',     78,   null],
    ['20/02',     68,   null],
    ['21/02',     58,   null],
    ['22/02',     48,   null],
    ['23/02',     38,   null],
    ['24/02',     28,   null],
    ['25/02',     18,   null],
    ['26/02',      8,   null],
    ['26/02',      0,   null]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('world_war_z')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 180}}
  );
}


google.setOnLoadCallback(drawVisualization);
