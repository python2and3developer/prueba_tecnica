(function () {
    require.config({
        baseUrl: "../js",
    });

	var testModules = [
		"normalizeRecordSerie0Test.js",
		"normalizeRecordSerie1Test.js",
        "normalizeRecordSerie2Test.js",
        "groupRecordsByCategoryTest.js"
	];

	require(testModules, function(){
        QUnit.load();
        QUnit.start();
	});
}());

