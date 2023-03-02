

const ctx = document.getElementById('mychart').getContext('2d');
const mychart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['jan', 'fab', 'mar', 'apr', 'may', 'jun'],
    datasets: [{
      label: '# of Votes',
    //   data: [12, 19, 3, 5, 2, 3],
      data: [2, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.4)',
    
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 1)',
    
      ],
      borderWidth: 1
    }]
  },
  options: {
    //indexAxis: 'x', 
     
    scales: {
      yAxes:[{
        ticks:{
          beginAtZero: true
        }
      }]
    }
  }
});


const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const value3 = document.getElementById('value3');
const value4 = document.getElementById('value4');
const value5 = document.getElementById('value5');
const value6 = document.getElementById('value6');

value1.style.borderColor = 'rgba(255, 99, 132, 0.5)';

Chart.overrides[bar].plugins.legend.dsplay = false;

//stop at 9.08