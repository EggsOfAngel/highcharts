
$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?', function (data) {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'AAPL Stock Price'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },
        yAxis: [{
            height: '50%'
        }, {
            top: '60%',
            height: '40%'
        }],

        series: [{
            type: 'ohlc',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: data
        }, {
            type: 'cci',
            linkedTo: 'aapl',
            name: 'CCI (14)',
            yAxis: 1
        }, {
            type: 'cci',
            linkedTo: 'aapl',
            yAxis: 1,
            name: 'CCI (50)',
            params: {
                period: 50
            }
        }]
    });
});
