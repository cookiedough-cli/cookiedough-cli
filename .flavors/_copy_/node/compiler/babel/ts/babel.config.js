module.exports = {
	"presets": [
		"@babel/preset-env"
	],
	"assumptions": {
		"setPublicClassFields": true
	},
	"plugins": [
		["@babel/plugin-transform-typescript", { "allowDeclareFields": true }],
		["@babel/plugin-proposal-decorators", { "legacy": true }],
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-class-properties"
	]
}
