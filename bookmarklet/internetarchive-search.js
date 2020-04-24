/**
 * 表示しているページを Internet Archive で検索する
 */
(() => {
	if (location.host === 'web.archive.org') {
		console.warn('表示しているサイトは Internet Archive 自身です。');
		return;
	}

	location.assign(`https://web.archive.org/web/*/${location}`);
})();
