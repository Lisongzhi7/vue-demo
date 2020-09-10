<template>
    <div id="app">
        <div v-if="!showNav" class="fd-head">
            <div class="fd-head-center">
                <div class="fd-logo-box">
                    <span><img class="logo-box" src="/static/image/logo.png">小懒码</span>
                </div>
                <div class="fd-logo-tile">
                    <router-link to="/home"><span class="fd-icon"><i
                        class="iconfont icon-shouye"></i></span><span>博客首页</span></router-link>
                    <router-link to="/fenlei"><span class="fd-icon"><i
                        class="iconfont icon-leimupinleifenleileibie1"></i></span><span>文章分类</span></router-link>
                    <router-link to="/guidang"><span class="fd-icon"><i class="iconfont icon-guidang3"></i></span><span>文章归档</span>
                    </router-link>
                    <router-link to="/lianjie"><span class="fd-icon"><i class="iconfont icon-youqinglianjie"></i></span><span>友情链接</span>
                    </router-link>
                    <router-link to="/guanyuwo"><span class="fd-icon"><i
                        class="iconfont icon-guanyuwo"></i></span><span>关于我</span></router-link>
                    <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
                </div>
            </div>

            <el-dialog :modal-append-to-body="false" :show-close="false" :visible.sync="dialogFormVisible">
                <div class="zhezhao">
                    <span><img src="/static/image/card6.gif"></span>
                </div>
            </el-dialog>
        </div>
        <div v-if="showNav" class="fd-head second">
            <div class="fd-head-center">
                <div class="fd-logo-box">
                    <span><img class="logo-box" src="http://xlsb.luokangyuan.com/logo.png">小懒码</span>
                </div>
                <div class="fd-logo-tile box">
                    <router-link to="/home"><span class="fd-icon"><i
                        class="iconfont icon-shouye"></i></span><span>博客首页</span></router-link>
                    <router-link to="/fenlei"><span class="fd-icon"><i
                        class="iconfont icon-leimupinleifenleileibie1"></i></span><span>文章分类</span></router-link>
                    <router-link to="/guidang"><span class="fd-icon"><i class="iconfont icon-guidang3"></i></span><span>文章归档</span>
                    </router-link>
                    <router-link to="/lianjie"><span class="fd-icon"><i class="iconfont icon-youqinglianjie"></i></span><span>友情链接</span>
                    </router-link>
                    <router-link to="/guanyuwo"><span class="fd-icon"><i
                        class="iconfont icon-guanyuwo"></i></span><span>关于我</span></router-link>
                    <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
                </div>
            </div>
            <el-dialog :modal-append-to-body="false" :show-close="false" :visible.sync="dialogFormVisible">
                <div class="zhezhao">
                    <span><img src="/static/image/card6.gif"></span>
                </div>
            </el-dialog>
        </div>
        <div class="fd-center">
            <div class="lunbo">
                <vue-particles color="#08ffc8">
                </vue-particles>
                <span class="fd-name">小懒码，初来驾到</span>
                <span class="fd-title">
                    You reap what you sow（一份耕耘，一份收获）
                    </span>
            </div>
            <router-view></router-view>
            <div class="fd-iconfont">
                <a href="javascript:" id="return_top" title="回到顶部"><i class="iconfont icon-hiiniconhuidaodingbu201"></i></a>
            </div>
        </div>

        <div class="fd-bottom">
            蜀ICP备18020378号
        </div>

    </div>

</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            dialogFormVisible: false,
            showNav: true
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {

        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 100) {
                this.showNav = true;
            } else if (scrollTop < 100) {
                this.showNav = false;
            }
        },
    },
    created() {
        setTimeout(() => {
            window.L2Dwidget.init({
                pluginRootPath: 'static/live2dw/',
                pluginJsPath: 'lib/',
                pluginModelPath: 'live2d-widget-model-z16/assets/',
                tagMode: false,
                debug: false,
                model: {jsonPath: '/static/live2dw/live2d-widget-model-z16/assets/z16.model.json'},
                display: {position: 'left', width: 250, height: 400},
                mobile: {show: true},
                log: false
            })
        }, 1000)
    }
};

(function (window, document, undefined) {
    var hearts = [];
    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 1000 / 60);
            }
    })();
    init();

    function init() {
        //css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
        css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px; left: -5px;}.heart:before{top: -5px; left: -5px;}");
        attachEvent();
        gameloop();
    }

    function gameloop() {
        for (var i = 0; i < hearts.length; i++) {
            if (hearts[i].alpha <= 0) {
                document.body.removeChild(hearts[i].el);
                hearts.splice(i, 1);
                continue;
            }
            hearts[i].y--;
            hearts[i].scale += 0.050;  //hearts[i].scale += 0.004;
            hearts[i].alpha -= 0.013;  //hearts[i].alpha -= 0.013;
            hearts[i].el.style.cssText = "left:" + hearts[i].x + "px;top:" + hearts[i].y + "px;opacity:" + hearts[i].alpha + ";transform:scale(" + hearts[i].scale + "," + hearts[i].scale + ") rotate(45deg);background:" + hearts[i].color;
        }
        requestAnimationFrame(gameloop);
    }

    function attachEvent() {
        var old = typeof window.onclick === "function" && window.onclick;
        window.onclick = function (event) {
            old && old();
            createHeart(event);
        }
    }

    function createHeart(event) {
        var d = document.createElement("div");
        d.className = "heart";
        hearts.push({
            el: d,
            x: event.clientX - 5,
            y: event.clientY - 5,
            scale: 1,
            alpha: 1,
            color: randomColor()
        });
        document.body.appendChild(d);
    }

    function css(css) {
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            style.appendChild(document.createTextNode(css));
        } catch (ex) {
            style.styleSheet.cssText = css;
        }
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    function randomColor() {
        return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
    }
})(window, document);

//      回到顶部效果
window.onload = function () {
    var obtn = document.getElementById('return_top');  //获取回到顶部按钮的ID
    var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
    var timer = null; //定义一个定时器
    var isTop = true; //定义一个布尔值，用于判断是否到达顶部

    window.onscroll = function () {         //滚动条滚动事件

        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (osTop >= clientHeight) {  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
            obtn.style.display = 'block';
        } else {         //否则隐藏
            obtn.style.display = 'none';
        }

        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }

    obtn.onclick = function () {    //回到顶部按钮点击事件
        //设置一个定时器
        timer = setInterval(function () {
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop = true;  //用于阻止滚动事件清除定时器
            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }

}



</script>

<style>


@font-face {
    font-family: 'Alibaba-PuHuiTi-Medium';
    src: url('/static/font/Alibaba-PuHuiTi-Medium.otf') format('truetype');
}

@font-face {
    font-family: 'Alibaba-PuHuiTi-Bold';
    src: url('/static/font/Alibaba-PuHuiTi-Bold.otf') format('truetype');
}

*, html, body {
    margin: 0;
    padding: 0;
}

#app {
    display: flex;
    flex-direction: column;
}

.fd-head {
    width: 100%;
    height: 60px;
    background: #000;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 10;
}

.second {
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
}

.fd-head-center {
    width: 1200px;
    height: 100%;
    display: flex;
}

.fd-logo-box {
    width: 400px;
    height: 100%;
}

.logo-box {
    height: 55px;
}

.fd-logo-box span {
    font-size: 30px;
    height: 100%;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    font-family: 'Alibaba-PuHuiTi-Bold';
}

.fd-logo-tile {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.fd-logo-tile a {
    margin-right: 10px;
}

a {
    text-decoration: none;
}

.fd-logo-tile span {
    display: inline-block;
    line-height: 60px;
    height: 60px;
    margin-left: 10px;
    font-size: 14px;
    color: #fff;
    font-family: "Alibaba-PuHuiTi-Medium";
}

.router-link-active span {
    color: lightpink;
}

.fd-center {
    display: flex;
    flex-direction: column;
    /*margin-top: 110px;*/
    height: 100%;
    width: 100%;
    /*margin-bottom: 35px;*/
}

.fd-bottom {
    display: flex;
    width: 100%;
    height: 60px;
    background: black;
    color: white;
    justify-content: center;
    align-items: center;
    /*position: fixed;*/
    bottom: 0px;
}

.zhezhao {
    height: 300px;
    width: 200px;
}

.lunbo {
    height: 500px;
    width: 100%;
    background: black;
}

.fd-name {
    margin-top: -280px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    font-size: 50px;
    position: absolute;
    font-weight: bold;
}

.fd-title {
    font-size: 20px;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: -188px;
    position: absolute;
    width: 100%;
}

#particles-js {
    height: 100%;
}

.fd-icon i {
    font-size: 15px;
}

.box a:hover {
    background: lavender;
    color: #57c6e1;
}

#return_top {
    position: fixed;
    right: 35px;
    bottom: 80px;
    display: none;
}

.fd-iconfont i {
    font-size: 70px;
}
</style>
