/**
 * 表示しているツイートの引用ツイートを検索する
 */
(() => {
	'use strict';

	if (location.host !== 'twitter.com') {
		alert('表示しているページは Twitter のツイート画面ではなさそうです。');
		return;
	}
	const pathMatch = location.pathname.match(/\/([a-zA-Z0-9_]{1,15})\/status\/(\d+)\/?/);
	if (pathMatch === null) {
		alert('表示しているページは Twitter のツイート画面ではなさそうです。');
		return;
	}

	location.assign(`https://twitter.com/search?q=url%3A${pathMatch[2]}&f=live`);
})();
