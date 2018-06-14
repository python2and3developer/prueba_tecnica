define(function(selector, categoriesData){
    function drawChart2(selector, categoriesData){
        var accumulativeValues = _.chain(categoriesData).mapObject(function(serie, categoryName){
            return _.reduce(serie, function(result, record){
                return {
                    name: categoryName,
                    y: result.y +record.y
                }
            }, {
                name: categoryName,
                y: 0
            });
        }).value();

        var total = _.chain(accumulativeValues).values().reduce(function(result, record){
            return result + record.y
        }, 0).value();

        var pieChartData = _.chain(accumulativeValues).mapObject(function(accumulativeValue, categoryName){
            return {
                name: accumulativeValue.name,
                y: (accumulativeValue.y * 100) / total
            }
        }).values().value();


        $(selector).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Pie Chart'
            },
            subtitle: {
                text: 'Comparing accumulative values of series'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Categories',
                colorByPoint: true,
                data: pieChartData
            }]
        });
    }

    return drawChart2
});
