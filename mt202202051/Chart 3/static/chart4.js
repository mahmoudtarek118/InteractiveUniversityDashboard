function fetchDataAndUpdateChart4() {
  fetch('/get-datachart4')
      .then(response => response.json())
      .then(data => {
          updateChart4(data);
      })
      .catch(error => console.error('Error:', error));
}

function updateChart4(data_df) {
  am5.ready(function() {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var root = am5.Root.new("chartdiv4");
      
      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelY: "zoomXY",
        pinchZoomX: true,
        pinchZoomY: true
      }));
      
      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 50 }),
        tooltip: am5.Tooltip.new(root, {})
      }));
      
      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        tooltip: am5.Tooltip.new(root, {})
      }));
      
      // Create series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      var series = chart.series.push(am5xy.LineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "y",
        valueXField: "x",
        valueField: "value",
        tooltip: am5.Tooltip.new(root, {
          labelText: "x: {valueX}, y: {valueY}, value: {value}"
        })
      }));
      
      series.strokes.template.set("visible", false);
      
      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        snapToSeries: [series]
      }));
      
      // Add scrollbars
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));
      
      chart.set("scrollbarY", am5.Scrollbar.new(root, {
        orientation: "vertical"
      }));
      
      var data = [];
      data_df.forEach(function(item) {
        data.push({ x: item.Semester_Number, y: item.Average,color: am5.Color.fromString("#49B7DD"), value: item.Std_Dev });
    });
      
      // add graphics to line series which will contain bullets
      var canvasBullets = series.children.push(am5.Graphics.new(root, {}));
      
      canvasBullets.set("draw", (display) => {
        
        // loop through all data items 
        am5.array.each(series.dataItems, (dataItem) => {
          // set fill style from data context
          var dataContext = dataItem.dataContext;
          if (dataContext) {
            const point = dataItem.get("point");
            if (point) {
              display.beginPath();
              display.beginFill(dataContext.color);
              display.drawCircle(point.x, point.y, dataContext.value / 2);        
              display.endFill();
            }
          }    
        })
        
      })
      
      // user data is set on each redraw, so we use this to mark draw as dirty
      series.strokes.template.on("userData", drawBullets);
      
      function drawBullets() {
        canvasBullets._markDirtyKey("draw");
      }
      
      series.data.setAll(data);
      
      }); // end am5.ready()
}
document.addEventListener('DOMContentLoaded', function() {
  fetchDataAndUpdateChart4()
});