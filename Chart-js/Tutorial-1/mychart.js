const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'line', //line, bar, radar, doughnut & Pie, polar Area, Bubble, Scatter, Area, Mixed and so on
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});