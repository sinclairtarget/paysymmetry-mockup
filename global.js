var data = {
    labels: ["$35k–$45k", "$45k–$55k", "$55k-$65k", "$65k-$75k", "$75k-$85k",
                "$85k-$95k", "$95k-$105k"],
    datasets: [
        {
            label: "All Salaries",
            backgroundColor: "rgba(0, 119, 137, 0.15)",
            borderColor: "rgb(0, 119, 137)",
            borderWidth: 1,
            data: [2, 1, 6, 7, 1, 0, 1]
        }
    ]
}

window.onload = function() {
    Chart.defaults.global.maintainAspectRatio = false;

    var context = document.getElementById('salary-dist').getContext('2d');
    var chart = new Chart(context, {
        type: 'bar',
        data: data,
        options: {
            legend: { display: false },
            scales: {
                yAxes: [{
                   ticks: {
                      min: 0,
                      max: 8
                  }, scaleLabel: { display: true, labelString: "Count" }
               }],
        xAxes: [{ scaleLabel: { display: true, labelString: "Range"}}]
            }
        }
    });

    context = document.getElementById('salary-scatter').getContext('2d');
    chart = new Chart(context, {
        type: 'line',
        data: {
            datasets: [{
                label: "All Salaries",
                backgroundColor: "rgba(0, 119, 137, 0.15)",
                borderColor: "rgb(0, 119, 137)",
                borderWidth: 1,
                data: [{
                    x: 1,
                    y: 36000
                }, {
                    x: 2,
                    y: 42000
                }, {
                    x: 3,
                    y: 46000
                }, {
                    x: 4,
                    y: 56500,
                }, {
                    x: 5,
                    y: 56500,
                }, {
                    x: 6,
                    y: 58000,
                }, {
                    x: 7,
                    y: 58500,
                }, {
                    x: 8,
                    y: 62000,
                }, {
                    x: 9,
                    y: 63000,
                }, {
                    x: 10,
                    y: 64000,
                }, {
                    x: 11,
                    y: 105000
                }]
            }]
        },
        options: {
            showLines: false,
            legend: { display: false },
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
}
