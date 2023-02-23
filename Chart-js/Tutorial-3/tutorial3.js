
//Array
const firsthalf = [2, 19, 3, 5, 2, 3];
const secondhalf = [15, 20, 25, 10, 20, 15];

const firstMonth = ['jan', 'fab', 'mar', 'apr', 'may', 'jun'];
const secondMonth = ['jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const allMonths = firstMonth.concat(secondMonth);

const colors1 = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',

  ];


  const colors2 = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',

  ];

  const colorMix = colors1.concat(colors2);
//combine array
const year = firsthalf.concat(secondhalf);
console.log(year);


const barchart = document.getElementById('barchart').getContext('2d');
const mychart = new Chart(barchart, {
  type: 'bar',
  data: {
    labels: allMonths,
    datasets: [{
      label: '# of Votes',
    //   data: [12, 19, 3, 5, 2, 3],
      data: year,
      backgroundColor: colorMix,
      borderColor: colorMix,
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