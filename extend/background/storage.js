var Url = {
	get() {
		return localStorage.url || '';
	},
	set(url) {
		localStorage.url = url;
	}
};

var Repeat = {
	get() {
		return localStorage.repeat || '';
	},
	set(repeat) {
		localStorage.repeat = repeat;
	}
};