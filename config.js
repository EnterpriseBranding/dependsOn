module.exports = {
	files: {
		// Single Compile Options
		'./src/dependsOn.js': {
			dist: './dist/',
			webpack: 'webpack_prod',
			rename: 'wponion-dependsOn.js',
		},
	},
	config: {
		webpack_prod: {
			mode: 'production',
			target: 'web',
			externals: { jquery: 'jQuery' },
			output: { filename: '[name].js', pathinfo: false },
			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						options: { presets: [ '@babel/env' ] }
					}
				]
			},
			devtool: 'none',
		},
	}
};