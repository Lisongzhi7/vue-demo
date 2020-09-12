<template>
        <div class="head">
            <div class="tag">
                <span v-for="(tag,index) of item.tags">{{tag.name}}</span>
            </div>
            <div class="tototo">
            <div v-html="content"></div></div>

        </div>
</template>

<script>
export default {
    name: "Detail",
    data () {
        return {
            item: '',
            content:'<p align="center">\n' +
                '< img width="130" align="center" src="http://image.luokangyuan.com/es.svg">\n' +
                '</p >\n' +
                '<h1 align="center">Html初级知识总结</h1>\n' +
                '<h2>1.基础知识脑图总结</h2>\n' +
                '<p>< img src="http://image.luokangyuan.com/2018-10-13-161954.png" alt="Html初级知识"></p >\n' +
                '<h2>2.基本简介</h2>\n' +
                '<h3>2.1.什么是Html</h3>\n' +
                '<p>Html不是编程语言，而是用来描述网页结构的一种标记语言 ，简单的说就是给展示在网页上的文本加上表示文本含义的标签，让人们可以更好的理解 。</p >\n' +
                '<h3>2.2.什么是Html5</h3>\n' +
                '<p>Html5是定义html标准的最新版本，是一个新的html语言，具有新的元素，属性和行为 ，新增了一些改变，例如标签语义化等。</p >\n' +
                '<h2>3.基本语法</h2>\n' +
                '<ul>\n' +
                '<li>html标签是有尖括号（&lt;和&gt;）包围的关键词，不区分大小写，推荐使用小写 ；</li>\n' +
                '<li>html标签是成对出现</li>\n' +
                '<li>html标签也存在空元素（不包含文本及其他属性的标签）例如<code data-backticks="1">&lt;img/&gt;</code></li>\n' +
                '<li>html文档包含的内容 ：文本、链接、图片、表格、表单、列表、框架等</li>\n' +
                '</ul>\n' +
                '<h2>4.基本概念</h2>\n' +
                '<h3>4.1.什么是标签</h3>\n' +
                '<p>用尖括号包围的关键字就是标签，存在开始标签和结束标签 。</p >\n' +
                '<h3>4.2.什么是元素</h3>\n' +
                '<p>简单讲就是标签+标签包含的文本内容 ，元素又分为三种，分别是<strong>块级元素</strong>、<strong>内联元素</strong>和<strong>内联块级元素</strong>。</p >\n' +
                '<p><strong>块级元素：</strong></p >\n' +
                '<ul>\n' +
                '<li>在浏览器显示默认是在新的一行开始（和结束）的元素</li>\n' +
                '<li>高度，宽度，行高以及距离顶部和底部的距离都可以设置</li>\n' +
                '<li>宽度默认是和父元素的宽度保持一直（父容器的100%）</li>\n' +
                '<li>常见的块级元素：div; p; h1; ol; li; dl; form; table; address等</li>\n' +
                '<li>使用display:block可以将元素转为块级元素</li>\n' +
                '</ul>\n' +
                '<p><strong>内联元素：</strong></p >\n' +
                '<ul>\n' +
                '<li>也叫行内元素，在浏览器中默认按照从左到右显示，不独占一行</li>\n' +
                '<li>高度，宽度以及距离顶部和底部的距离不可设置</li>\n' +
                '<li>宽度就是它包含的文字或者图片的宽度</li>\n' +
                '<li>常见的内联元素：a; span; br; i; em; lable; q;strong等</li>\n' +
                '<li>使用display:inline可将块级元素转为内联元素</li>\n' +
                '</ul>\n' +
                '<p><strong>内联块级元素：</strong></p >\n' +
                '<ul>\n' +
                '<li>同时具备内联元素和块级元素的特点</li>\n' +
                '<li>和其他元素在一行上</li>\n' +
                '<li>元素的宽度和高度以及距离顶部和底部的距离都是可以设置的</li>\n' +
                '<li>常见的内联块级元素：img; input</li>\n' +
                '<li>使用display:inline-block; float:left/right; position: absolute/fixed可以将元素转为内联块级元素</li>\n' +
                '</ul>\n' +
                '<h3>4.3.什么是属性</h3>\n' +
                '<p>属性就是在开始标签中以名称+值存在的内容就是属性。</p >\n' +
                '<pre><code data-language="html" class="lang-html"> &lt;a href="index.html"&gt;&lt;/a&gt;\n' +
                '</code></pre>\n' +
                '<p><strong>常见的全局属性：</strong></p >\n' +
                '<ul>\n' +
                '<li>id：控制元素的唯一</li>\n' +
                '<li>class：设置元素一个或者类名，用于样式表中的类</li>\n' +
                '<li>style：设置元素的行内样式</li>\n' +
                '<li>title：定义元素的提示信息</li>\n' +
                '<li>lang：设置元素内容的语言代码</li>\n' +
                '<li>accesskey：设置访问元素的键盘快捷键</li>\n' +
                '<li>tabindex：设置元素的tab键次序</li>\n' +
                '</ul>\n' +
                '<p><strong>常见的元素属性：</strong></p >\n' +
                '<ul>\n' +
                '<li>href：指定链接到互联网或者其他资源</li>\n' +
                '<li>target：指定打开链接的目标窗口</li>\n' +
                '<li>title：指定所要链接的页面的文本描述</li>\n' +
                '<li>src：指定请求资源的服务器路径</li>\n' +
                '<li>alt：指定图片未加载时候显示的文字</li>\n' +
                '</ul>\n' +
                '<h2>5.常见元素</h2>\n' +
                '<h3>5.1.根元素</h3>\n' +
                '<ul>\n' +
                '<li><code data-backticks="1">&lt;doctype&gt;</code>：定义文档类型</li>\n' +
                '<li><code data-backticks="1">&lt;html&gt;</code>：定义Html文档</li>\n' +
                '</ul>\n' +
                '<pre><code data-language="html" class="lang-html">&lt;!DOCTYPE html&gt;\n' +
                '</code></pre>\n' +
                '<pre><code data-language="html" class="lang-html">&lt;html lang="en"&gt;\n' +
                '</code></pre>\n' +
                '<h3>5.2.元数据元素</h3>\n' +
                '<ul>\n' +
                '<li><code data-backticks="1">&lt;head&gt;</code>：定义文档信息</li>\n' +
                '<li><code data-backticks="1">&lt;meta&gt;</code>：定义文档的元数据</li>\n' +
                '<li><code data-backticks="1">&lt;title&gt;</code>：定义文档的标题</li>\n' +
                '</ul>\n' +
                '<pre><code data-language="html" class="lang-html">&lt;!DOCTYPE html&gt;\n' +
                '&lt;html lang="en"&gt;\n' +
                '&lt;head&gt;\n' +
                '    &lt;meta charset="UTF-8"&gt;\n' +
                '    &lt;title&gt;首页&lt;/title&gt;\n' +
                '&lt;/head&gt;\n' +
                '</code></pre>\n' +
                '<h3>5.3.块级元素</h3>\n' +
                '<ul>\n' +
                '<li><code data-backticks="1">&lt;body&gt;</code>：定义文档主体内容</li>\n' +
                '<li><code data-backticks="1">&lt;h1&gt;、&lt;h2&gt;...&lt;h6&gt;</code>：定义文档标题</li>\n' +
                '<li><code data-backticks="1">&lt;ul&gt;、&lt;ul&gt;、&lt;dl&gt;</code>：定义列表</li>\n' +
                '</ul>\n' +
                '<pre><code data-language="html" class="lang-html">&lt;div&gt;\n' +
                '    &lt;h1&gt;一级标题&lt;/h1&gt;\n' +
                '    &lt;p&gt;段落&lt;/p&gt;\n' +
                '    &lt;blockquote&gt;段落长引用&lt;/blockquote&gt;\n' +
                '    &lt;table&gt;\n' +
                '        &lt;thead&gt;\n' +
                '            &lt;th&gt;&lt;/th&gt;\n' +
                '        &lt;/thead&gt;\n' +
                '    &lt;/table&gt;\n' +
                '&lt;/div&gt;\n' +
                '</code></pre>\n' +
                '<blockquote>\n' +
                '<p>说明：由于Html标签太多，就不再一一列举了，推荐一个API文档< a href=" ">WebDoc</ a></p >\n' +
                '</blockquote>\n' +
                '<h2>6.总结</h2>\n' +
                '<p>Html初级知识主要设计基本语法、基本声明使用、基本的概念、常用的元素和常用的属性，重点在于知道块级元素和内联元素之间的区别，以及那些元素是什块级元素，那些元素是内联元素。最重点的是学会如何查找API。</p >'
        }
    },
    mounted() {
        this.item = this.$route.params.wz;
        console.log(this.item);
    }
}
</script>

<style scoped>

.head{
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 1400px;
    margin-top: -30px;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}
>>> ul{
    margin-left: 20px;
}
.head span{
    padding: 5px 18px;
    background: #00c6fb;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 18px;
    color: #fff;
    flex-direction: row;
    margin-left: 30px;
}
.tag{
    display: flex;
    height: 100px;
    width: 1400px;
    flex-direction: row;
    border-bottom: 1px solid #999999;
    align-items: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
>>> p img{
    height: 250px;
    width: 200px;
}
.tototo{
    height: 100%;
    width: 1300px;
    margin-left: 50px;
}
>>> p{
    font-size: 18px;
    margin-top: 20px;
}
>>> p code{
    background: #f8f8f8;
    color: #e96900;
}
>>> h2{
    font-size: 30px;
    font-weight: bold;
    color: #34495e;
    border-bottom: 1px solid #ddd;
}
>>> code-toolbar{
    background: #272822;
    border-radius: 5px;
}
</style>