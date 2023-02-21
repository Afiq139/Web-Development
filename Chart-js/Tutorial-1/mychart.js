//stop at 31.42


const beginnerchart = document.getElementById('beginnerchart').getContext('2d');
// var ctx = document.getElementById('beginnerchart').getContext('2d');
      
const chart = new Chart(beginnerchart, {

  // The type of chart we want to create
  type: 'bar', 
  //line, bar, radar, doughnut & Pie, Bubble, Scatter, Area, Mixed and so on


  //the data for our dataset
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],

    datasets: [{
      label: 'My First Dataset',
      backgroundColor: ['rgb(255, 99, 132)', 'rgba(255, 0, 0, 0.1)', 'gray', '#009900'],
      borderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black'],
      data: [12, 19, 3, 5, 2, 3, 10],
      borderWidth: 10
    },

    {label: 'My Second Dataset',
    backgroundColor: ['rgb(255, 99, 132)', 'rgba(255, 0, 0, 0.1)', 'gray', '#009900'],
    borderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black'],
    data: [12, 19, 3, 5, 2, 3, 10],
    borderWidth: 10
    },
  
  
  ]

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

//borderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black']
//borderColor: ['0', '1', '2', '3', '4', '5', '6']



const abc = chart.data.datasets[0].label;
const borderSize = chart.data.datasets[0].borderWidth;
const bordercolors = chart.data.datasets[0].borderColor;
const bordergreen = chart.data.datasets[0].borderColor[3];

//1. extract in console.log for labels
//2. extract border color blue
//3. number 19 from data
const colorPurple = chart.data.labels[4];
const colorBlue = chart.data.datasets[0].borderColor[1];
const number19 = chart.data.datasets[0].data[1];

console.log(abc);
console.log(borderSize);
console.log(bordercolors);
console.log(bordergreen);
console.log(colorPurple);
console.log(colorBlue);
console.log(number19);