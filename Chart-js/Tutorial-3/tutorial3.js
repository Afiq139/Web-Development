
//Array
const firsthalf = [2, 19, 3, 5, 2, 3];
const secondhalf = [15, 20, 25, 10, 20, 15];

const firsttMonth = ['jan', 'fab', 'mar', 'apr', 'may', 'jun'];
const secondMonth = ['jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

//combine array
const year = firsthalf.concat(secondhalf);
console.log(year);


const barchart = document.getElementById('barchart').getContext('2d');
const mychart = new Chart(barchart, {
  type: 'bar',
  data: {
    labels: firsttMonth,
    datasets: [{
      label: '# of Votes',
    //   data: [12, 19, 3, 5, 2, 3],
      data: year,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',

      ],
      borderColor:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',


      ],


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