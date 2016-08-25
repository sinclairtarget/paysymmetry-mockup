var pieData = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
        ]
    }]
};

window.onload = function() {
    console.log("Hello");
    console.log(document.getElementById('salary-dist'));
    var context = document.getElementById('salary-dist').getContext('2d');
    var pieChart = new Chart(context, {
        type: 'pie',
        data: pieData
    });
}
