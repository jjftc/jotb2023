"use strict";

var randomChartData = function randomChartData(n) {
  var data = [];
  for (var i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200));
  }
  return data;
};
var chartColors = {
  "default": {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860'
  }
};
var ctx = document.getElementById('big-line-chart').getContext('2d');
var labels = ["0-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+"];
var data = {
  labels: labels,
  datasets: [{
    label: 'Satisfacción',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(201, 203, 207, 0.2)'],
    borderColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)'],
    borderWidth: 1
  }]
};
new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
var config = {};