let graph = document.getElementById('Chart');

let TimeData = {
    labels: '',
    datasets: [{
        label: 'Real Time',
        data: [],
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor:'rgba(75, 192, 192, 1)',
    }],
};

let chartdtl = {
    type: 'line',
    data: TimeData,
    options: {
        scales: {
            x: {
                position: 'bottom',
                backgroundColor:'white',
                // TextColor:'red',
            },
            y: {
                beginAtZero: true,
            },
        },
    },
};

let presentdata = new Chart(graph,chartdtl);

function randomfun() {
    let newData = Math.random() * 50;
    presentdata.data.datasets[0].data.push(newData);
    presentdata.data.labels.push(presentdata.data.labels.length);
    presentdata.update();
}

setInterval(randomfun, 1500);