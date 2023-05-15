module.exports = {
	extends: [
		'./node_modules/@rtvision/configs/src/lint/typescript-eslint.yml'
	],
	parserOptions: {
		tsconfigRootDir: __dirname
	}
};
