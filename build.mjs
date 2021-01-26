import fs from 'fs';
import path from 'path';

const filePath = process.argv[2];

/* ファイル読み込み */
fs.readFile(filePath, (error, data) => {
	if (error !== null) {
		console.error(error);
	}

	/* 書き出し */
	const outFilePath = `bookmarklet/${path.basename(filePath, '.min.js')}.txt`;
	const outData = `javascript:${data.toString()}`;

	fs.writeFile(outFilePath, outData, (error) => {
		if (error !== null) {
			console.error(error);
		}
	});
});
