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

    datasets: [
      {label: 'First Dataset',
      backgroundColor: ['rgb(255, 99, 132)', 'rgba(255, 0, 0, 0.1)', 'gray', '#009900'],
      borderColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'black'],
      data: [12, 19, 3, 5, 2, 3, 10],
      borderWidth: 7
    },

    {label: 'Second Dataset',
    backgroundColor: ['pink', 'grey', 'violet', 'brown'],
    borderColor: ['orange', 'cyan', 'lightblue', 'bloodorange'],
    data: [15, 10, 7, 5, 3, 2, 1],
    borderWidth: 5
    },

    {label: 'Third Dataset',
    backgroundColor: ['marineblue', 'lightgreen', 'greenblue', 'gold'],
    borderColor: ['applegreen', 'cornflowerblue', 'lightblue', 'bloodorange'],
    data: [8, 9, 11, 13, 15, 21, 33],
    borderWidth: 5
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

//Accessing 2nd dataset, grey
//2nd dataset label
//missing or broken
const colorGrey = chart.data.datasets[1].backgroundColor[1];
const secondDataSet = chart.data.datasets[1].label;
const missingcolor1 = chart.data.datasets[2].backgroundColor[0];
const missingcolor2 = chart.data.datasets[2].borderColor[0];

//chart type
const chartType = chart.config.type;

console.log(abc);
console.log(borderSize);
console.log(bordercolors);
console.log(bordergreen);

console.log(colorPurple);
console.log(colorBlue);
console.log(number19);

console.log(colorGrey);
console.log(secondDataSet);
console.log(missingcolor1);
console.log(missingcolor2);

console.log(chartType);