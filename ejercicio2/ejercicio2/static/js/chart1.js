define(function(){
    function drawChart1(selector, categoriesData){

        var series = [];
        var categoryNames = Object.keys(categoriesData);
        var category;

        for (var i=0; i < categoryNames.length; i++){
            category = categoryNames[i];

            series.push({
                "name": category,
                "data": categoriesData[category],
            });
        }

        $(selector).highcharts({
            chart: {
              type: 'line',
              zoomType: 'x'
            },
            title: {
                text: 'Line chart'
            },
            subtitle: {
                text: 'Comparing series from different categories'
            },
            legend: {
                enabled: true,
                layout: "horizontal",
                verticalAlign: "bottom",
                align: "center"
            },
            xAxis: {
              type: 'category',
              categories:  ["1 June", "2 June", "3 June", "4 June", "5 June", "6 June", "7 June", "8 June", "9 June", "10 June", "11 June", "12 June", "13 June", "14 June", "15 June", "16 June", "17 June", "18 June", "19 June", "20 June", "21 June", "22 June", "23 June", "24 June", "25 June", "26 June", "27 June", "28 June", "29 June", "1 July", "2 July", "3 July", "4 July", "5 July", "6 July", "7 July", "8 July", "9 July", "10 July", "11 July", "12 July", "13 July", "14 July", "15 July", "16 July", "17 July", "18 July", "19 July", "20 July", "21 July", "22 July", "23 July", "24 July", "25 July", "26 July", "27 July", "28 July", "29 July"]
            },
            yAxis: {
              title: {
                text: 'Value'
              },
              min: 0
            },
            plotOptions: {
                series: {
                    marker: {
                        radius: 4
                    },
                    lineWidth: 2,
                    states: {
                        hover: {
                            lineWidth: 3
                        }
                    },
                    shadow: false
                }
            },
            tooltip: {
              pointFormat: '<b>{point.series.name}</b><br>value: {point.y:.0f}',
                valueDecimals: 2,
                split: false
            },
            series: series
        });

    };

    return drawChart1
})
