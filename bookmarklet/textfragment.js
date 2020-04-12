/**
 * 選択文字列の情報を Scroll To Text Fragment 用にURLに追加する
 *
 * @version 1.0.0 2020-04-12 公開用に作成
 */
(() => {
	const selectionStr = getSelection().toString();
	if (selectionStr === '') {
		console.warn('文字列が選択されていません。');
		return;
	}

	const newUrl = new URL(location);
	newUrl.hash = `#:~:text=${encodeURIComponent(selectionStr)}`;

	location.assign(newUrl);
})();
