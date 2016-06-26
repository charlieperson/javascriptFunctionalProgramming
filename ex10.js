Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
    subArray.forEach(function(subArrayItem){
    	results.push(subArrayItem);
    });
	});

	return results;
};
