function fetchDataAndUpdateChart2() {
    fetch('/get-datachart')
        .then(response => response.json())
        .then(data => {
            updateChart2(data);
        })
        .catch(error => console.error('Error:', error));
}
function updateChart2(data_df) {
 
    //console.log(data_df)
    am5.ready(function() {
        
    // Create root element
    var root = am5.Root.new("chartdiv1");

root.setThemes([
  am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
  am5percent.PieChart.new(root, {height: am5.percent(60)
   , radius: am5.percent(130),verticalCenter: "bottom", // Align the center of the chart to the bottom
   centerY: am5.percent(-24) // Adjust this value to move the chart lower 
  })
);


// Create series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    name: "Series",
    valueField: "sales",
    categoryField: "country",
    alignLabels: false
  })
);

series.data.setAll(data_df);

series.labels.template.setAll({
  fontSize: 12,
  text: "{category}",
  textType: "adjusted",
  radius: 10,
  fill: am5.color("#222") // Set font color to white
});
 // end am5.ready()
 var legend = chart.children.push(am5.Legend.new(root, {
  // Position the legend at the bottom
  y: am5.percent(100),
  centerY: am5.percent(50),
  layout: root.verticalLayout // Use vertical layout
}));


// Change font color of legend labels to white
legend.labels.template.set("fill", am5.color("#FFFFFF"));


legend.data.setAll(series.dataItems);


    }); // end am5.ready()
}
document.addEventListener('DOMContentLoaded', function() {
    fetchDataAndUpdateChart2()
});
 
 