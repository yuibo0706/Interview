# 1. 浮动 和 定位
	浮动(float)
		浮动的框可以向左或向右移动, 脱离文档流
		float: left;
		float: right;
	清浮动(clear)
		clear属性规定元素的哪一侧不允许其他浮动元素
		clear: left;
		clear: right;
		clear: both;
		
		常用清浮动class:
			.clearfloat {
				zoom: 1;
			}

			.clearfloat {
				display: block;
				clear: both;
				content: "";
				visibility: hidden;
				height: 0;
			}
 
	定位(position) 
		relative: 相对定位, 没有脱离文档流 
		absolute: 绝对定位, 脱离文档流, 向外层查找父元素, 遇到的第一个position: relative;的元素为父元素, 以该父元素的原点为(0,0)定位 
		fixed: 固定定位, 脱离文档流 
		inherit: 继承父元素的position 
	
	

# 2. 居中

# 3. css3新特性

# 4. rem、em、px、vh、vw的区别
    rem: html根节点的font-size的大小 === 1rem 
    em: 父节点的font-size的大小 === 1em	
    px: 像素, 你的物理设备屏幕能显示的最小的点, 不同设备px的长宽不同, 所以会需要做移动端适配	
    vh: 屏幕可视高度 / 100	
    vw: 屏幕可视宽度 / 100	
	
# 5. src和href的区别
    src是引入, 用于替换当前元素, 在请求src资源时会将其指向的资源下载并应用到文档内
    href是引用, 用于在当前文档和引用资源之间确立联系 
	
# 6. link和@import的区别
    link是XHTML标签,除了加载CSS外,还可以定义RSS等其他事务;@import属于CSS范畴,只能加载CSS。
    link引用CSS时,在页面载入时同时加载;@import需要页面网页完全载入以后加载。
    link是XHTML标签,无兼容问题;@import是在CSS2.1提出的,低版本的浏览器不支持。
    link支持使用Javascript控制DOM去改变样式;而@import不支持。

# 7. 雪碧图(css精灵) 和 @font-face 
	作用: 实现icon小图标
	三种方法实现icon小图标

	1. css Sprite (css 精灵, css 雪碧图, 雪碧图, 图片拼合技术)
		相关知识点:
			background-image(背景图片)
			background-position(背景图片定位)
		特点:
			1. 相对单个小图标, 它节省文件体积和服务器请求次数
			2. 一般情况下, 你需要保存PNG-24的文件格式, 相对于PNG-8没有毛边
			3. 可以设计出丰富多彩的颜色图标
		难点:
			1. 需要预先确定每个小图标大小
			2. 注意小图标与小图标之间的距离
			
	2. font + HTML(比 css雪碧图好)
		步骤: 
			1. 下载字体
				先到https://icomoon.io中下载你所要使用的icon图片
				注意: 下载 Generate Font, 表示下载的是可以直接在网页中使用的字体图标
				下载的压缩包中一般会有 demo.html文件 和 fonts目录
					demo.html: 里面一般会有所有对应icon图标的十六进制码
					fonts目录: 里面是所有字体icon的4种类型文件
					
			2. 制定字体 @font-face
				/* 制定字体 */
				@font-face{
					/* 自定义字体名称 */
					font-family: "your-icon";
					/* 
						url 自定义字体路径
						format 给对应字体(.eot .woff .ttf .svg) 自定义字体格式
					*/
					src: url("../fonts/icomoon.eot"); /* IE9 兼容模式 */
					src: url("../fonts/icomoon.eot?#iefix") format("embedded-opentype")
						 ,url("../fonts/icomoon.woff") format("woff")
						 ,url("../fonts/icomoon.ttf") format("truetype")
						 ,url("../fonts/icomoon.svg") format("svg");
					/* 字体粗细正常 */
					font-weight: normal;
					/* 字体样式正常 */
					font-style: normal;
				}
			3. 引入字体
				通过字体容器style的font-family属性引入字体
				.xxx-icon {
					font-family: "your-icon";
					font-weight: normal;
					font-style: normal;
					font-size: 64px;
				}
			4. 调用字体
				<i class="xxx-icon"> &#x + 对应icon图标的十六进制码 </i>
			5. 调整样式
				因为这些icon图标都是字体, 所以它们跟普通字体一样受css的作用
		
		特点:
			1. 灵活: 随意改变图标颜色和其他css效果
			2. 矢量性: 图标是矢量的, 与像素无关, 缩放图标不会影响清晰度
			3. 兼容性: 兼容性好
			4. 本地使用

	3. font + css
		知识点: 
			:before(:after) 
				伪元素, 创建一个虚假的元素, 并插入到目标元素内容之前(或之后)
			content属性:
				与:before或:after伪元素配合使用, 来插入生成内容
		在content属性中写入十六进制码代替html中写入, 使用\代替&#x, 在伪类中通过font-family属性引入字体图标, 其余步骤和 font + HTML 一样
			.css-icon1:before {
				content: '\e957';
				font-family: icomoon-icons;
				font-weight: normal;
				font-style: normal;
				font-size: 64px;
			}
常用免费icon图标网址: [https://icomoon.io](https://icomoon.io) <br>
[demo](https://github.com/l511407563/Interview/blob/master/css/icon) <br>
![](https://github.com/l511407563/Interview/blob/master/css/icon/demo.png) <br>

# 8. 文本超出显示省略号
	单行文本超出显示省略号 兼容所有浏览器
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	
	多行文本超出显示省略号
	div {
		display: block;
		width: 100px;
		height: 60px;
		/* ...这里添加relative */
		position: relative;

		/* 多行文本超出显示省略号 */
		overflow: hidden;
		text-overflow: ellipsis;
		/* chrome */
		display: -webkit-box;
		/* 表示第几行后面出现省略符号 */
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;

		/* 兼容IE和FF */
		display: -moz-box;
		-moz-line-clamp: 2 !important;
		-moz-box-orient: vertical;
		font-size: 14px;
	}
	/* 兼容IE和FF */
	div:after {
		background: linear-gradient(to right, rgba(255, 255, 255, 0), #FFFFFF 50%) repeat scroll 0 0 rgba(0, 0, 0, 0);
		bottom: 0;
		content: "...";
		padding: 0 5px 1px 30px;
		position: absolute;
		right: 0;
	}



























