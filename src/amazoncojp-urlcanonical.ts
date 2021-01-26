/**
 * Amazon.co.jp の商品ページURLを正規化する
 */
(() => {
	if (location.host !== 'www.amazon.co.jp') {
		alert('表示しているページは Amazon.co.jp の画面ではなさそうです。');
		return;
	}

	if (/^\/dp\/([\dA-Z]{10})$/.test(location.pathname)) {
		console.info('すでに正規化済みです。');
		return;
	}

	const canonicalUrl = (<HTMLLinkElement | null>document.querySelector('link[rel="canonical"]'))?.href;
	if (canonicalUrl === undefined) {
		alert('<link rel="canonical"> がありません。');
		return;
	}
	location.assign(/^https:\/\/www.amazon.co.jp\/dp\/([\dA-Z]{10})$/.test(canonicalUrl) ? canonicalUrl : canonicalUrl.replace(/\/([^/]*)\/dp\//, '/dp/'));
})();
