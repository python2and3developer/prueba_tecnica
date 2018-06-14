define(function (require) {

	var ParseData = require("./parse_data");

	QUnit.module("normalizeRecordSerie1");

	QUnit.test("Testing normalizeRecordSerie1 with sample of record. 1", function (assert) {
        var record = {"myDate":"2015-06-02","categ":"CAT 1","val":46.300059172697175};

		assert.deepEqual(ParseData.normalizeRecordSerie1(record), {
            "date": new Date("2015-06-02"),
            "category":"CAT 1",
            "value": 46.300059172697175
        }, 'Parsing success of {"myDate":"2015-06-02","categ":"CAT 1","val":46.300059172697175}');
	});


	QUnit.test("Testing normalizeRecordSerie1 with sample of record. 2", function (assert) {
        var record = {"myDate":"2015-06-15","categ":"CAT 1","val":92.41149931632995};

		assert.deepEqual(ParseData.normalizeRecordSerie1(record), {
            "date": new Date("2015-06-15"),
            "category":"CAT 1",
            "value": 92.41149931632995
        }, 'Parsing success of {"myDate":"2015-06-15","categ":"CAT 1","val":92.41149931632995}');
	});

});
