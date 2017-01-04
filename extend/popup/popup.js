const BG = chrome.extension.getBackgroundPage();

document.addEventListener("DOMContentLoaded", () => {

	const url = document.querySelector('#url');
	const repeat = document.querySelector('#repeat');
	const btnCreateTab = document.querySelector('#btnCreateTab');

	url.value = BG.Url.get() || '';
	repeat.value = BG.Repeat.get() || '';

	url.addEventListener('input', e => {
		BG.Url.set(e.target.value);
	});

	repeat.addEventListener('input', e => {
		BG.Repeat.set(e.target.value);
	});

	url.addEventListener('keydown', e => {
		if (e.keyCode == 13) {
			BG.createTabs();
		}
	});

	repeat.addEventListener('keydown', e => {
		if (e.keyCode == 13) {
			BG.createTabs();
		}
	});

	btnCreateTab.addEventListener('click', () => {
		BG.createTabs();
	});

});