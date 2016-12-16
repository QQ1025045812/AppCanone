module.exports={
	entry:'./index.js',
	output:{
		path:__dirname+'/phone/dist/',
		filename:'build.js'
	},
	module:{
		loaders:[
			{test:/\.vue$/,loader:'vue'},
		    {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
		    {test:/\.(png|jpg)$/,loader:'url-loader'}
		]
	},
	babel:{
		presets:['es2015']
		//plugins:['transform-runtime']
	}
};