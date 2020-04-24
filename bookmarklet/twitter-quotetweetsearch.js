/**
 * 表示しているツイートの引用ツイートを検索する
 */
(() => {
	if (location.host !== 'twitter.com') {
		console.warn('表示しているページは Twitter のツイート画面ではなさそうです。');
		return;
	}
	const pathMatch = location.pathname.match(/\/([a-zA-Z0-9]+)\/status\/(\d+)\/?/);
	if (pathMatch === null) {
		console.warn('表示しているページは Twitter のツイート画面ではなさそうです。');
		return;
	}

	location.assign(`https://twitter.com/search?q=url%3A${pathMatch[2]}&f=live`);
})();
