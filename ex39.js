function (getSearchResultSet, keyPresses, textBox) {

	var getSearchResultSets =
		keyPresses.
			map(function () {
				return textBox.value;
			}).
			throttle(1000).
			concatMap(function (text) {
				return getSearchResultSet(text).takeUntil(keyPresses);
			});

	return getSearchResultSets;
}
        
