Array.zip = function(left, right, combinerFunction) {
	var counter,
		results = [];

	for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(right[counter], left[counter]));
	}

	return results;
};
