var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	webserver = require('gulp-webserver'),//加载模块
 	sass = require('gulp-ruby-sass'),
 	uglify = require('gulp-uglify'),
 	imagemin = require('gulp-imagemin');//图片压缩
//注册html任务
gulp.task('html',()=>{
	return gulp.src('src/*.html')//指明文件路径  /**/监听目录下所有的.html文件
    .pipe(gulp.dest('dist'));//输出路径
});
//注册任务
gulp.task('webserver',()=>{
	gulp.src('dist').pipe(webserver({
		livereload:true,
		open:true
	}));
});

//注册css任务
gulp.task('sass',()=>{
	return sass('src/scss/*.scss',{style:'compact'})//简洁格式的css
	.on('error',function(err){
		console.log('编译sass出错%s',err.message);
	})//指明文件路径  /**/监听目录下所有的.html文件
    .pipe(gulp.dest('dist/css'));//输出路径
});

//注册js任务
gulp.task('myjs',()=>{
	return gulp.src('src/js/*.js')
	.pipe(uglify({ preserveComments:'some'}))//保留注释压缩
	.pipe(gulp.dest('dist/js')); 
});
//压缩AJAX
gulp.task('data',()=>{
	return gulp.src('src/data/**/*.js')
	.pipe(uglify({ preserveComments:'some'}))//保留注释压缩
	.pipe(gulp.dest('dist/data')); 
});
//注册图片压缩任务
gulp.task('images',()=>{
	return gulp.src('src/imgs/**/*.{png,jpg,gif,svg}')
	.pipe(imagemin({ progressive:true,//无损压缩jpg
		svgoPlugins:[{removeViewBox:false}],//不溢出svgviewbox属性
	}))//保留注释压缩
	.pipe(gulp.dest('dist/imgs')); 
});
//监听任务
gulp.task('watch',function(){
	gulp.watch('*.html',['html']);//监听目录下所有的.html文件
});
//默认任务
gulp.task('default',['sass','html','myjs','images','data','webserver','watch']);
