define(function (require) {

	var ParseData = require("./parse_data");

	QUnit.module("normalizeRecordSerie2");

	QUnit.test("Testing normalizeRecordSerie2 with sample of record. 1", function (assert) {
        var record = {"raw":"9OHbc9 O1 WHTxiBPa auwZIVD6 j8jMWWVH UdB6hy 2015-06-18 XF 5xhcx15DD sbYFRPn dyoH1OOIF 6meHw pANknwa2h T imhs24gR5 #CAT 1#","val":39.38690127513058};

		assert.deepEqual(ParseData.normalizeRecordSerie2(record), {
            "date": new Date("2015-06-18"),
            "category":"CAT 1",
            "value": 39.38690127513058
        }, 'Parsing success of {"raw":"9OHbc9 O1 WHTxiBPa auwZIVD6 j8jMWWVH UdB6hy 2015-06-18 XF 5xhcx15DD sbYFRPn dyoH1OOIF 6meHw pANknwa2h T imhs24gR5 #CAT 1#","val":39.38690127513058}');
	});


	QUnit.test("Testing normalizeRecordSerie2 with sample of record. 2", function (assert) {
        var record = {"raw":"YCcoeoNR8 T4VSBd0GC fpAepuTD 5A40zJ6 y5bXBb rRxM 2015-06-08 J KA9FicdV BSbvirf #CAT 2#","val":74.10101967551246};

		assert.deepEqual(ParseData.normalizeRecordSerie2(record), {
            "date": new Date("2015-06-08"),
            "category":"CAT 2",
            "value": 74.10101967551246
        }, 'Parsing success of {"raw":"YCcoeoNR8 T4VSBd0GC fpAepuTD 5A40zJ6 y5bXBb rRxM 2015-06-08 J KA9FicdV BSbvirf #CAT 2#","val":74.10101967551246}');
	});

});
