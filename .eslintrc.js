module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
	},
}
