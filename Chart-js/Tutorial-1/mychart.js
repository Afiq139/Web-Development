//stop at 18.28


var beginnerchart = document.getElementById('beginnerchart').getContext('2d');
// var ctx = document.getElementById('beginnerchart').getContext('2d');
      
var chart = new Chart(beginnerchart, {

  // The type of chart we want to create
  type: 'bar', 
  //line, bar, radar, doughnut & Pie, Bubble, Scatter, Area, Mixed and so on


  //the data for our dataset
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
    datasets: [{
      label: 'My First Data',
      backgroundColor: ['rgb(255, 99, 132)', 'rgba(255, 0, 0, 0.1)', 'gray', '#009900'],
      borderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black'],
      data: [12, 19, 3, 5, 2, 3, 10],
      borderWidth: 10
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

//to extract data
// canvas > id="beginnerchart" > data > dataset[0] >label
// chart > data > dataset[0] >label

var abc = chart.data.datasets[0].label;
console.log(abc);