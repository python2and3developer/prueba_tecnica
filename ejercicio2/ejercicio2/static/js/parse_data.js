define({
    normalizeRecordSerie0: function(rawRecord){
        /* Normalizar registro de serie 0
         *
         * @param {object} rawRecord Registro en crudo de la serie 0
         * @return {object} Registro normalizado
         */
        var date, category, record;

        record = {};

        record["date"] = new Date(rawRecord["d"]);
        record["category"] = rawRecord["cat"].toUpperCase();
        record["value"] = rawRecord["value"];

        return record
    },

    normalizeRecordSerie1: function(rawRecord){
        /* Normalizar registro de serie 1
         *
         * @param {object} rawRecord Registro en crudo de la serie 1
         * @return {object} Registro normalizado
         */

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
        /* Normalizar registro de serie 2
         *
         * @param {object} rawRecord Registro en crudo de la serie 1
         * @return {object} Registro normalizado
         */

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
        /* Dada una lista de registros se agrupan todos en categorias
         * Tambien se unen los registros que tienen la misma fecha.
         * Se proporciona los datos en un formato específico listo para
         * ser consumido por highcharts.
         *
         * @param {list} records Lista de registros normalizados
         * @return {object} Objeto conteniendo para cada categoria la lista
         *                  de datos ordenados por fecha listos para ser consumidos
         *                  por highcharts.
         **/

        var recordsByCategory = _.chain(records).groupBy(function(record){
            // Agrupamos por categoria

            return record.category
        }).mapObject(function(serie, categoryName){
            // Por cada serie asociada a la categoria devolvemos una serie
            // donde se han agrupado los registros con la misma fecha.
            // Dicha lista se ordena por fecha.
            // Luego se construye una nueva lista apta para ser consumida
            // por highcharts.

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
        /* Función principal que normaliza los datos de todas las series y
         * te devuelve un objeto donde los registros están agrupados por categoria
         * @param {list} data Lista de series
         * @return {object} Datos agrupos por categorías listos para ser consumidos
         *                  por highcharts
         */

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
