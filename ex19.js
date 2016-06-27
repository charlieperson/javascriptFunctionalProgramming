function() {
	var videos = [
		{
			"id": 65432445,
			"title": "The Chamber"
		},
		{
			"id": 675465,
			"title": "Fracture"
		},
		{
			"id": 70111470,
			"title": "Die Hard"
		},
		{
			"id": 654356453,
			"title": "Bad Boys"
		}
	];

	return videos.
		reduce(function(accumulatedMap, video) {
		var obj = {};
    obj[video.id] = video.title;

		return Object.assign(accumulatedMap, obj);
		},
		{});
}
