define({
    normalizeRecordSerie0: function(rawRecord){
        var date, category, record;

        record = {};

        record["date"] = new Date(rawRecord["d"]);
        record["category"] = rawRecord["cat"].toUpperCase();
        record["value"] = rawRecord["value"];

        return record
    },

    normalizeRecordSerie1: function(rawRecord){
        var date, category, record;

        record = {};

        date = new Date(rawRecord["myDate"]);
        record["date"] = date;

        category = rawRecord["categ"].toUpperCase();
        record["category"] = category;

        record["value"] = rawRecord["val"];

        return record
    },

    normalizeRecordSerie2: function(rawRecord){
        var date, category, match, record;

        record = {};

        match = /\d{4}-\d{1,2}-\d{1,2}/.exec(rawRecord["raw"]);
        date = new Date(match[0]);

        record["date"] = date;

        match = /#(.+?)#$/.exec(rawRecord["raw"]);
        category = match[1].toUpperCase();

        record["category"] = category;
        record["value"] = rawRecord["val"];

        return record
    },

    groupRecordsByCategory: function(records){
        var recordsByCategory = _.chain(records).groupBy(function(record){
            return record.category
        }).mapObject(function(serie, categoryName){
            return _.chain(serie).groupBy(function(record){
                    return record.date
                }).values().map(function(recordsOfSameDate){
                    return _.reduce(recordsOfSameDate, function(result, nextRecord) {
                        return {
                            category: categoryName,
                            date: result.date,
                            value: result.value + nextRecord.value
                        }
                    });
                }).sortBy(function(record){
                    return record.date.getTime();
                }).map(function(record){
                    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                    var date = record.date;
                    var formatedDate = date.getDate() + " " + monthNames[date.getMonth()]

                    return {
                        name: formatedDate,
                        y: record.value
                    };
                }).value();
        }).value();

        return recordsByCategory
    },

    parse: function(data){
        var serie, record, rawRecord, recordsByCategory, records = [], i;

        for (i=0; i < data.length; i++) {
            serie = data[i];
            for (j=0; j < data[i].length; j++){
                rawRecord = serie[j];

                record = this["normalizeRecordSerie"+ i](rawRecord);
                records.push(record);
            }
        }

        recordsByCategory = this.groupRecordsByCategory(records);

        return recordsByCategory
    }
});
