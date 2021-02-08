const { bird } = require("./table");

const stat = (treeInfo, birdInfo, total) => {

  const birdNames = birdInfo.map(birdData => birdData.name);
  //내림차순으로 정렬한 새 퀴즈 포함 횟수 배열
  const birdSelectedTimes = birdInfo.map(birdData => birdData.selected).sort(function (a, b) { return b - a });
  const treeNames = treeInfo.map(treeData => treeData.name);
  const treeSelectedTimes = treeInfo.map(treeData => treeData.selected).sort(function (a, b) { return b - a });
  const render = `
  <div class="container">
      <div class="row row-cols-1 row-cols-lg-2">
      <div class="col my-2">
        <div class="text-center">총 <span class="text-primary">${total.birdPhoto}번</span>의 새 사진 퀴즈<small>와</small> <span class="text-primary">${total.birdSound}번</span>의 새 소리 퀴즈에서</div>
        <canvas id="birdChart" width="100%" height="200px" class="shadow-sm rounded-lg bg-light"></canvas>
      </div>
      <div class="col my-2">
        <div class="text-center">총 <span class="text-primary">${total.leaf}번</span>의 새 사진 퀴즈에서</div>
        <canvas id="leafChart" width="100%" height="200px" class="shadow-sm rounded-lg bg-light"></canvas>
      </div>
    </div>
  </div>
    <script src="/chartjs/Chart.js"></script>
    <script>
      var ctxBird = document.getElementById('birdChart');
      var myChart = new Chart(ctxBird, {
          type: 'horizontalBar',
          data: {
              labels: ${JSON.stringify(birdNames)},
              datasets: [{
                  label: '퀴즈에 포함된 횟수',
                  data: ${JSON.stringify(birdSelectedTimes)},
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              title: {
                display: true,
                text: '인기 많은 🐦는?!', 
                fontSize: 20,
              },
              legend: {
                display: false,
                labels: {
                  // This more specific font property overrides the global property
                  fontSize: 12
                }
              },
              scales: {
                  xAxes: [{
                      ticks: {
                          min: 0,
                          max: ${Math.max(...birdSelectedTimes)},
                          callback: (value) => (
                            (value / ${Math.max(...birdSelectedTimes).toFixed(1)} * 100 + '%')
                          )
                      },
                      scaleLabel: {
                        display: true,
                        labelString: '퀴즈에 포함된 비율'
                      }
                  }],
                  yAxes: [{
                    ticks: {
                      fontSize: 10,
                    },
                  }]
              }
          }
      });
    </script>
    <script>
      var ctxLeaf = document.getElementById('leafChart');
      var myChart = new Chart(ctxLeaf, {
          type: 'horizontalBar',
          data: {
              labels: ${JSON.stringify(treeNames)},
              datasets: [{
                  label: '퀴즈에 포함된 횟수',
                  data: ${JSON.stringify(treeSelectedTimes)},
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              title: {
                display: true,
                text: '인기 많은 🌳는?!', 
                fontSize: 20,
              },
              legend: {
                display: false,
                labels: {
                  // This more specific font property overrides the global property
                  fontSize: 12
                }
              },
              scales: {
                  xAxes: [{
                      ticks: {
                          min: 0,
                          max: ${Math.max(...treeSelectedTimes)},
                          callback: (value) => (
                            (value / ${Math.max(...treeSelectedTimes).toFixed(1)} * 100 + '%')
                          )
                      },
                      scaleLabel: {
                        display: true,
                        labelString: '퀴즈에 포함된 비율'
                      }
                  }],
                  yAxes: [{
                    ticks: {
                      fontSize: 10,
                    },
                  }]
              }
          }
      });
    </script>
  `

  return render;
}

module.exports = stat;