
// 获取视口宽度
var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取根元素
var htmlDom = document.getElementsByTagName('html')[0];

// 设置根元素的font-size
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

// 改变窗口
window.addEventListener('resize', function () {
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
});
