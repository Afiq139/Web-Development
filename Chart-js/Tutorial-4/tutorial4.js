
const line = document.getElementById('line');
const bar = document.getElementById('bar');


line.addEventListener('click', changeline);
bar.addEventListener('click', changebar);

const ctx = document.getElementById('dynamic-chart').getContext('2d');
const mychart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['jan', 'fab', 'mar', 'apr', 'may', 'jun'],
    datasets: [{
      label: '# of Votes',
    //   data: [12, 19, 3, 5, 2, 3],
      data: [2, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
    
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
    
      ],
      borderWidth: 1
    }]
  },
  options: {

    indexAxis: 'y',  //y-axis
     
    scales: {
      y: {
        beginAtZero: true
      },
    }
  }
});

function changeline(){

  const updatetype = 'line';
  mychart.config.type = updatetype;
  mychart.update();
  //console.log(mychart.config.type);
  // console.log('changeline function')
};

function changebar(){
  const updatetype1 = 'bar';
  mychart.config.type = updatetype1;
  mychart.update();
  //console.log(mychart.type); //undefined
  // console.log('changebar function')
};