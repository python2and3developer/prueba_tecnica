define(function (require) {

	var ParseData = require("./parse_data");

	QUnit.module("groupRecordsByCategory");

	QUnit.test("Testing groupRecordsByCategory with a sample list of records", function (assert) {
        var listOfRecords = [
            {
                date: new Date("4-5-2015"),
                category: "CAT 1",
                value: 1
            },
            {
                date: new Date("12-5-2015"),
                category: "CAT 1",
                value: 2
            },
            {
                date: new Date("4-2-2015"),
                category: "CAT 2",
                value: 11
            },
            {
                date: new Date("4-5-2015"),
                category: "CAT 3",
                value: 124
            },
            {
                date: new Date("4-1-2015"),
                category: "CAT 2",
                value: 12
            }
        ]


		assert.deepEqual(ParseData.groupRecordsByCategory(listOfRecords),
            {
              "CAT 1": [
                {
                  "name": "5 April",
                  "y": 1
                },
                {
                  "name": "5 December",
                  "y": 2
                }
              ],
              "CAT 2": [
                {
                  "name": "1 April",
                  "y": 12
                },
                {
                  "name": "2 April",
                  "y": 11
                }
              ],
              "CAT 3": [
                {
                  "name": "5 April",
                  "y": 124
                }
              ]
            }, 'Success groups records by category');
	});

});
