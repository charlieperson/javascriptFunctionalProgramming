function() {
	var ratings = [2,3,1,4,5];

	// You should return an array containing only the largest rating. Remember that reduce always
	// returns an array with one item.
	return ratings.reduce(function(accum, current){
    if(current > accum) {
      return current;
    } else {
      return accum;
    }
  }, 0);
}
