function formatUrl(url) {
	if (!url) {
		url = 'chrome://newtab/';
	} else if (!url.includes('http://') && !url.includes('https://') && !url.includes('ftp://')) {
		url = 'http://' + url;
	}
	return url;
}

var createTabs = function () {

	var url = Url.get(),
		repeat = Repeat.get();

	repeat = repeat && !isNaN(repeat) && parseInt(repeat) > 0 ? parseInt(repeat) : 1;

	for (var i = 0; i < repeat; i++) {
		chrome.tabs.create({
			url: formatUrl(url)
		});
	}

};