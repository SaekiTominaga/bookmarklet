/**
 * Amazon.co.jp の商品ページURLを正規化する
 *
 * @version 1.0.0 2020-04-12 公開用に作成
 */
(() => {
	if (location.host !== 'www.amazon.co.jp') {
		console.warn('表示しているページは Amazon.co.jp の画面ではなさそうです。');
		return;
	}

	if (/^\/dp\/([\dA-Z]{10})$/.test(location.pathname)) {
		console.warn('すでに正規化済みです。');
		return;
	}

	const canonicalUrl = document.querySelector('link[rel="canonical"]').href;
	location.assign(/^https:\/\/www.amazon.co.jp\/dp\/([\dA-Z]{10})$/.test(canonicalUrl) ? canonicalUrl : canonicalUrl.replace(/\/([^/]*)\/dp\//, '/dp/'));
})();
