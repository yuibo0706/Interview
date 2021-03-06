# 步骤: 
1. 非node环境中使用sass: 安装ruby环境  --->  在ruby环境环境中安装sass  --->  安装sass的框架compass

2. node环境中使用sass

	1. 安装 <br>
		npm i --save-dev sass-loader <br>
		npm i --save-dev node-sass
	2. 配置 <br>
		在build目录下的 webpack.base.conf.js的rules里面添加 <br>
		{ 						<br>
		  test: /\.sass$/,				<br>
		  loaders: ['style', 'css', 'sass']		<br>
		}
	3. 在APP.vue中修改style标签 <br>
		<style lang='scss'>
	4. vscode中 vue 的scss显示语法错误, 但是webpack正常编译 <br>
		先安装vetur插件, 然后配置vscode首选项	<br>
		'file.associations': {			<br>
			'*.vue': 'vue'			<br>
		}
	

## 1. 安装ruby
[安装ruby地址](https://rubyinstaller.org/downloads/ "ruby官网") <br>
	在安装的时候，请勾选Add Ruby executables to your PATH这个选项，添加环境变量，不然以后使用编译软件的时候会提示找不到ruby环境 <br>
	检测是否安装成功: ruby -v

## 2. 打开ruby命令行界面
	安装完ruby之后，在开始菜单中，搜索ruby，打开Start Command Prompt with Ruby

## 3. 安装sass(scss)
	在ruby命令行界面中:
	安装sass:	gem i sass
	如果要安装beta版本的sass:	gem i sass --pre
	升级sass版本:  gem update sass
	查看sass版本: sass -v
	查看你需要的sass命令: sass -h
	卸载sass: gem uninstall sass

## 4. 安装compass
	gem i conpass
	(Compass 是一个成熟的、基于 Sass 开发的一个框架，这里面集成了很多写好的 mixins 和 Sass 函数。)

## 5. sass和scss
	.sass是老语法对应的扩展名
	.scss是新语法对应的扩展名
现在都使用.scss

## 6. sass编译
	单文件编译
	  一次性编译
	    sass <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
	  监听编译
	    sass --watch <要编译的Sass文件路径>/style.scss:<要输出CSS文件路径>/style.css
		
	多文件编译
	    sass --watch sass/:css/
		
## 7. sass不用样式风格的输出方法
[demo.css](https://github.com/l511407563/Interview/blob/master/sass/sass/demo.scss) <br>
![](https://github.com/l511407563/Interview/blob/master/sass/image/demo.png) <br>

嵌套输出方式(默认) [nested.css](https://github.com/l511407563/Interview/blob/master/sass/css/nested.css) <br>
sass --watch sass/demo.scss:css/nested.css --style nested <br>
![](https://github.com/l511407563/Interview/blob/master/sass/image/nested.png) <br>	

展开输出方式 [expanded.css](https://github.com/l511407563/Interview/blob/master/sass/css/expanded.css)  
sass --watch sass/demo.scss:css/expanded.css --style expanded <br>
![](https://github.com/l511407563/Interview/blob/master/sass/image/expanded.png) <br>	

紧凑输出方式 [compact.css](https://github.com/l511407563/Interview/blob/master/sass/css/compact.css) <br>
sass --watch sass/demo.scss:css/compact.css --style compact <br>
![](https://github.com/l511407563/Interview/blob/master/sass/image/compact.png)	<br>

压缩输出方式 [compressed.css](https://github.com/l511407563/Interview/blob/master/sass/css/compressed.css) <br>
sass --watch sass/demo.scss:css/compressed.css --style compressed <br>
![](https://github.com/l511407563/Interview/blob/master/sass/image/compressed.png) <br>

## 8. sass调试(适用任何css文件)
[css调试视频教程](http://www.imooc.com/video/7804) <br>
	原理: 在chrome的调试工具Sources中添加工作目录workspaces, 然后将浏览器的Sources目录映射到本地
	作用: 你可以直接修改浏览器中的文件, 本地文件也会被同步
效果图:
##### a.样式文件
![](https://github.com/l511407563/Interview/blob/master/sass/image/css调试1.png)  
##### b.直接在浏览器中修改样式文件
![](https://github.com/l511407563/Interview/blob/master/sass/image/css调试2.png) 
##### c.本地文件也被修改
![](https://github.com/l511407563/Interview/blob/master/sass/image/css调试3.png) 

## 9. sass常用语法
### 9.1 变量
	普通变量: $width: 100px;
	默认变量: $width: 100px !default;
	全局变量与局部变量和js一样
### 9.2 嵌套
a.选择器嵌套 

	&代表&所在的嵌套结构  
	这里header & = header nav a
![](https://github.com/l511407563/Interview/blob/master/sass/image/选择器嵌套.png)
b.属性嵌套

	注意属性嵌套和选择器嵌套的区别 
	属性嵌套有冒号: font-size写成  font: {size}  
	选择器嵌套无冒号: header {div}
![](https://github.com/l511407563/Interview/blob/master/sass/image/属性嵌套.png)  <br> 
c.伪类嵌套 

	写法同属性嵌套类似: 有冒号
![](https://github.com/l511407563/Interview/blob/master/sass/image/伪类嵌套.png) <br> 
### 9.3 混合宏
	@mixin 是用来声明混合宏的关键词
	@include 是用来调用混合宏的关键词
	
	不带参数混合宏
	@mixin border-radius{}
	
	带参数混合宏
	@mixin border-radius($radius:5px){}
	
	复杂的混合宏
	@mixin border-radius($radius...){判断语句}
![](https://github.com/l511407563/Interview/blob/master/sass/image/混合宏1.png) <br> 
	
### 9.4 扩展/继承
	@extend
![](https://github.com/l511407563/Interview/blob/master/sass/image/继承.png) <br> 

### 9.5 占位符
	%placeholder
	优点: 
		%clear{
		    clear: both;
		}
		如果没有被@extend, 它是不会在.css文件中产生代码块的。
		
		.clear{
		    clear: both;
		}
		不管有没有被调用, 它都会在.css文件中产生代码块, 造成代码冗余。
### 宏 继承 占位符 使用场景
![](https://github.com/l511407563/Interview/blob/master/sass/image/宏继承占位符比较.png) <br> 
	
### 9.6 加减乘除
	sass的加减乘除符号两边要加上空格, 否则会被当成字符串。
	不同单位的变量不能直接运算。
	$width1: 800px;
	$width2: 200px;
	.box {
		width: (($width1 + $width2) - 10 * 2) / 2;
	}
	
### 9.7 px转换成rem
	// iphone6基准值
	@function pxToRem($px) {
		$rem : 37.5px;
		@return ($px / $rem) + rem; 
	}
	
	.box {
		width: 	pxToRem(100px);
		height: pxToRem(100px);
	}






















	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
