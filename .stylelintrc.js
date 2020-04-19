module.exports= {
  "plugins": [
    "stylelint-prettier",
    "stylelint-order",
    "stylelint-scss"
  ],
  "rules": {
    "prettier/prettier": [true, {"singleQuote": true, "tabWidth": 2}],
    "unicode-bom": "never",
    "order/order": [
			[
				"custom-properties",
				"declarations"
			],
			{
				"disableFix": true
			}
    ],
    "declaration-empty-line-before": "never"
  },
  "extends": [
    "stylelint-prettier/recommended",
    "stylelint-config-prettier",
    "stylelint-config-rational-order"
  ]
}