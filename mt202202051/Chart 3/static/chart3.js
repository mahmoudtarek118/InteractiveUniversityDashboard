am5.ready(function() {


// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv3");


var myTheme = am5.Theme.new(root);

myTheme.rule("Grid", ["base"]).setAll({
  strokeOpacity: 0.1
});


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root),
  myTheme
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panY",
  wheelY: "zoomY",
  paddingLeft: 0,
  layout: root.verticalLayout
}));

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarY", am5.Scrollbar.new(root, {
  orientation: "vertical"
}));

var data = [{
  "year": "semester 1",
  "paper 1": 1.2,
  "paper 2": 2.3,
  "paper 3": 0.8,
  "paper 4": 1.5,
  "paper 5": 0.7,
  "paper 6": 2.1,
  "paper 7": 1.8
}, {
  "year": "semester 2",
  "paper 1": 0.5,
  "paper 2": 1.9,
  "paper 3": 1.7,
  "paper 4": 2.4,
  "paper 5": 1.3,
  "paper 6": 0.9,
  "paper 7": 1.2
}, {
  "year": "semester 3",
  "paper 1": 2.7,
  "paper 2": 0.6,
  "paper 3": 1.8,
  "paper 4": 1.4,
  "paper 5": 2.0,
  "paper 6": 1.3,
  "paper 7": 0.4
}, {
  "year": "semester 4",
  "paper 1": 1.3,
  "paper 2": 0.8,
  "paper 3": 2.0,
  "paper 4": 2.2,
  "paper 5": 1.6,
  "paper 6": 2.5,
  "paper 7": 1.1
}, {
  "year": "semester 5",
  "paper 1": 2.3,
  "paper 2": 1.2,
  "paper 3": 0.9,
  "paper 4": 1.7,
  "paper 5": 0.6,
  "paper 6": 2.0,
  "paper 7": 1.5
}, {
  "year": "semester 6",
  "paper 1": 1.8,
  "paper 2": 2.1,
  "paper 3": 1.6,
  "paper 4": 1.0,
  "paper 5": 2.3,
  "paper 6": 0.7,
  "paper 7": 2.2
}, {
  "year": "semester 7",
  "paper 1": 0.8,
  "paper 2": 2.4,
  "paper 3": 1.9,
  "paper 4": 2.3,
  "paper 5": 1.1,
  "paper 6": 1.4,
  "paper 7": 2.5
}, {
  "year": "semester 8",
  "paper 1": 2.2,
  "paper 2": 1.4,
  "paper 3": 0.5,
  "paper 4": 1.8,
  "paper 5": 2.4,
  "paper 6": 1.7,
  "paper 7": 0.9
}];



// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yRenderer = am5xy.AxisRendererY.new(root, {});
var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "year",
  renderer: yRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

yRenderer.grid.template.setAll({
  location: 1
})

yAxis.data.setAll(data);

var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  maxPrecision: 0,
  renderer: am5xy.AxisRendererX.new(root, {
    minGridDistance: 40,
    strokeOpacity: 0.1
  })
}));

// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}));


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
function makeSeries(name, fieldName) {
  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    stacked: true,
    xAxis: xAxis,
    yAxis: yAxis,
    baseAxis: yAxis,
    valueXField: fieldName,
    categoryYField: "year"
  }));

  series.columns.template.setAll({
    tooltipText: "{name}, {categoryY}: {valueX}",
    tooltipY: am5.percent(90)
  });
  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();

  series.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Label.new(root, {
        text: "{valueX}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: am5.p50,
        centerX: am5.p50,
        populateText: true
      })
    });
  });

  legend.data.push(series);
}

makeSeries("paper 1", "paper 1");
makeSeries("paper 2", "paper 2");
makeSeries("paper 3", "paper 3");
makeSeries("paper 4", "paper 4");
makeSeries("paper 5", "paper 5");
makeSeries("paper 6", "paper 6");
makeSeries("paper 7", "paper 7");



// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);

}); // end am5.ready()