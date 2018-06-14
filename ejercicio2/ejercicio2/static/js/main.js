define(["parse_data", "chart1", "chart2"], function(parseData, drawChart1, drawChart2){
    $(function(){
         $.ajax({
            url : window.location.href + "data",
            type : "GET",
            success : function(json) {
                var categoriesData = parseData.parse(json.data);

                drawChart1('#chart1', categoriesData);
                drawChart2('#chart2', categoriesData);
            },
            error : function(xhr,errmsg,err) {
                console.log(xhr.status + ": " + xhr.responseText);
            }
         });
    })
});
