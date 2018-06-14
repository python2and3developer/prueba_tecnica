define(function (require) {

	var ParseData = require("./parse_data");

	QUnit.module("normalizeRecordSerie0");

	QUnit.test("Testing normalizeRecordSerie0 with sample of record. 1", function (assert) {
        var record = {"d":1435708800000, "cat":"Cat 1", "value":832.803815816826};

		assert.deepEqual(ParseData.normalizeRecordSerie0(record), {
            "date": new Date("7-1-2015 02:00"),
            "category":"CAT 1",
            "value": 832.803815816826
        }, 'Parsing success of {"d":1435708800000,"cat":"Cat 1","value":832.803815816826}');
	});


	QUnit.test("Testing normalizeRecordSerie0 with sample of record. 2", function (assert) {
        var record = {"d":1435795200000,"cat":"CaT 2","value":388.91650675134025};

		assert.deepEqual(ParseData.normalizeRecordSerie0(record), {
            "date": new Date("7-2-2015 02:00"),
            "category":"CAT 2",
            "value": 388.91650675134025
        }, 'Parsing success of {"d":1435795200000,"cat":"CaT 2","value":388.91650675134025}');
	});

});
