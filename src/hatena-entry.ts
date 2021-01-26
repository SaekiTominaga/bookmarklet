/**
 * はてなブックマークのエントリーページを表示する
 */
(() => {
	'use strict';

	switch (location.protocol) {
		case 'https:':
			window.open(`https://b.hatena.ne.jp/entry/s/${location.host}${location.pathname}${location.search}`);
			break;
		case 'http:':
			window.open(`https://b.hatena.ne.jp/entry/${location.host}${location.pathname}${location.search}`);
			break;
		default:
			alert('対応しているプロトコルは https: / http: のみです。');
	}
})();
