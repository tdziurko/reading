function drawVisualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Date', 'Estimated progress', 'Current'],
    ['08/09',   320,       320 ],
    ['09/09',   310,       300 ],
    ['10/09',   300,       300 ],
    ['11/09',   290,       300 ],
    ['12/09',   280,       300 ],
    ['13/09',   270,       300 ],
    ['14/09',   260,       300 ],
    ['15/09',   250,       300 ],
    ['16/09',   240,       300 ],
    ['17/09',   230,       300 ],
    ['18/09',   220,       300 ],
    ['19/09',   210,       300 ],
    ['20/09',   200,       300 ],
    ['21/09',   190,       275 ],
    ['22/09',   180,       275 ],
    ['23/09',   170,       260 ],
    ['24/09',   160,       250 ],
    ['25/09',   150,       200 ],
    ['26/09',   140,       180 ],
    ['27/09',   130,       180 ],
    ['28/09',   120,       170 ],
    ['29/09',   110,       160 ],
    ['30/09',   100,       160 ],
    ['01/10',    90,       150 ],
    ['02/10',    80,       120 ],
    ['03/10',    70,       100 ],
    ['04/10',    60,        90 ],
    ['05/10',    50,        85 ],
    ['06/10',    40,        50 ],
    ['07/10',    30,        50 ],
    ['08/10',    20,        50 ],
    ['09/10',    10,        20 ],
    ['10/10',     0,         0 ]
  ]);

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('git_gajda')).
      draw(data, {curveType: "function",
        width: 800, height: 425, pointSize: 3, legend: {position: "top"},
        vAxis: {maxValue: 330}}
  );
}


google.setOnLoadCallback(drawVisualization);